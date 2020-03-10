

import { Controller, Get, Param, Res, Redirect } from '@nestjs/common';

import { FileService } from '../_services/file.service';

import { TAreaObject, TElementObject, TPageObject } from './../_utilities/custom.types';

import { ISite, ISitePageObject, IRouteResponse, IRouteObject, IDatabaseQueryResolution } from '../_interfaces/ISite.interface';

import { Log, CALL_PAGE_FACTORY } from '../_utilities/base.constants';

import { PageFactory } from './../_factories/page.factory'


@Controller()
export class MainController {


  private globalDataObject: ISite;


  /*
   * @Param construct page.
   */

  constructor() {}


  /*
   * @Param Query DB for site object.
   */

  private initialiseDatabaseState(): void {

    FileService.queryDb('site').then((response: IDatabaseQueryResolution) => {
      this.globalDataObject = response.payload;
    }).catch((error: IDatabaseQueryResolution) => {
      Log(error.payload);
    });

  }

  /*
 * @Param Return home page.
 */

  @Get('')
  public homeRouteProvider(@Res() responseToSend: any): any {
    return responseToSend.redirect(303, '/home');
  }

  /*
   * @Param Primary get route, given by ID.
   */

  @Get(':id')
  public async customRouteProvider(@Param() param: IRouteResponse, @Res() responseToSend: any) {

    await this.initialiseDatabaseState();

    return this.routeConstructor(param, this.globalDataObject).then((factoryResponse: ISitePageObject) => {

      const template = factoryResponse.options.template;
      const areas = factoryResponse.contentItems[0].areas;

      // add a title object?
      
      responseToSend.render(template, {
        pageData: {
          routes: this.getPageProps('GET_ROUTES'),
        },
        viewData: areas,
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

  public async routeConstructor(routeIdObject: IRouteResponse, globalDataObject: ISite): Promise<ISitePageObject | string> {

    const routeItem: ISitePageObject = await globalDataObject.pages.find(pageObject => pageObject.route.routeActual === routeIdObject.id);
    const localFactory: TPageObject | TAreaObject | TElementObject = await this.factoryBuilder(routeItem);

    return new Promise((resolve, reject) => {

      if (localFactory) {
        localFactory.init()
          .then((res: ISitePageObject) => {
            resolve(res);
          }).catch(() => {
            console.log('CAUGHT ERROR!');
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

  public factoryBuilder(routeItem: ISitePageObject): TPageObject | TAreaObject | TElementObject {

    if (!routeItem) {
      routeItem = this.globalDataObject.errorPage;
    }

    return new PageFactory(routeItem).call(CALL_PAGE_FACTORY);

  }

}
