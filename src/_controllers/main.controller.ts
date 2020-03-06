

import { Controller, Get, Param, Res } from '@nestjs/common';

import { FileService } from '../_services/file.service';

import { TPageObject } from './../_utilities/custom.types';

import { ISite, ISitePageObject, IRouteResponse, IRouteObject, IDatabaseQueryResolution } from '../_interfaces/ISite.interface';

import { Log, CALL_PAGE_FACTORY } from '../_utilities/base.constants';

import { PageFactory } from './../_factories/page.factory'


@Controller()
export class MainController {


  private globalDataObject: ISite;


  /*
   * @Param construct page.
   */

  constructor() {

    this.initialiseDatabaseState();

  }


  /*
   * @Param Query DB for site object.
   */

  private initialiseDatabaseState(): void {

    FileService.queryDb('site').then((response: IDatabaseQueryResolution) => {
      this.globalDataObject = response.payload;
      // console.log(this.globalDataObject.pages[0].contentItems[0].areas);
    }).catch((error: IDatabaseQueryResolution) => {
      Log(error.payload);
    });

  }

  /*
 * @Param Return home page.
 */

  @Get('')
  public homeRouteProvider(@Res() responseToSend: any): any {
    this.routeConstructor({ id: 'home' }, this.globalDataObject).then((factoryResponse: ISitePageObject) => {
      return responseToSend.render(factoryResponse.options.template, {
        pageData: {
          routes: this.getPageProps('GET_ROUTES'),
        },
        viewData: factoryResponse.contentItems[0].areas,
      });
    }).catch((err: string) => {
      return responseToSend.render('error.hbs', {
        pageData: [],
        viewData: err,
      });
    });

  }

  /*
   * @Param Primary get route, given by ID.
   */

  @Get(':id')
  public customeRouteProvider(@Param() param: IRouteResponse, @Res() responseToSend: any): any {

    return this.routeConstructor(param, this.globalDataObject).then((factoryResponse: ISitePageObject) => {
      responseToSend.render(factoryResponse.options.template, {
        pageData: {
          routes: this.getPageProps('GET_ROUTES'),
        },
        viewData: factoryResponse.contentItems[0].areas,
      });
    }).catch((err: string) => {
      responseToSend.render('error.hbs', {
        pageData: [],
        viewData: err,
      });
    });

  }


  public getPageProps(command: string): string[] {

    const commandSet = {
      'GET_ROUTES': () => {
        const routes: IRouteObject[] = [];
        this.globalDataObject.pages.forEach((page) => {
          if (page.route.routeShown) {
            routes.push(page.route);
          }
        });
        return routes;
      },
    };

    return commandSet[command]();

  }


  /*
   * @Param Does the business of actually constructing the page object to be sent back to the client side.
   */

  public routeConstructor(routeIdObject: IRouteResponse, globalDataObject: ISite): Promise<ISitePageObject | string> {

    let routeItem: ISitePageObject;
    let localFactory: TPageObject;

    return new Promise((resolve, reject) => {

      routeItem = globalDataObject.pages.find(pageObject => pageObject.route.routeActual === routeIdObject.id);
      localFactory = this.factoryBuilder(routeItem);

      if (localFactory) {
        localFactory.init()
          .then((res: ISitePageObject) => {
            resolve(res);
          }).catch(() => {
          reject('404 Page Not Found.');
        });
      } else {
        reject('404 Page Not Found.');
      }
    });

  }

  /*
   * @Param Returns the appropriate page factory in an uninitialised state.
   */

  public factoryBuilder(routeItem: ISitePageObject): TPageObject {

    if (!routeItem) {
      routeItem = this.globalDataObject.errorPage;
    }

    return new PageFactory(routeItem).init(CALL_PAGE_FACTORY);

  }

}
