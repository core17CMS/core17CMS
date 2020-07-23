

import { Controller, Get, Param, Res, Redirect } from '@nestjs/common';

import { FileService } from '../_services/file.service';

import { TAreaObject, TElementObject, TPageObject } from './../_utilities/custom.types';

import { ISite, ISitePageObject, IRouteResponse, IRouteObject, IDatabaseQueryResolution } from '../_interfaces/ISite.interface';

import { Log, CALL_PAGE_FACTORY } from '../_utilities/base.constants';

import { PageFactory } from './../_factories/page.factory'
import { BasePageClass } from '../_classes/base-page.class';
import { IBasePageInterface } from '../_interfaces/basePageClass/IBasePage.interface';


@Controller()
export class MainController {


  private globalDataObject: ISite;


  /*
   * @Param construct page.
   */

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}


  /*
   * @Param Query DB for site object.
   */

  private async initialiseDatabaseState(): Promise<Array<BasePageClass>> {

    const listOfBasePages: BasePageClass[] = [];

    await FileService.queryDb('site_new').then((response) => {
        response.payload.pages.forEach((page: IBasePageInterface) => {
          listOfBasePages.push(BasePageClass.makeSingle(page));
        });
    }).catch((error: IDatabaseQueryResolution) => {
      Log(error.payload)
    });

    return listOfBasePages;

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

    const listOfBasePages: BasePageClass[] = await this.initialiseDatabaseState();

    const pageToRender: BasePageClass = await listOfBasePages.find(page => page.pageRoute === param.id);

    console.log(pageToRender);
    // console.log('pageToRender.pageOptions.pageTemplate', pageToRender.pageOptions.pageTemplate)
    // console.log('listOfBasePages = ', listOfBasePages)

    responseToSend.render(pageToRender.pageOptions.page_template)

    // return this.routeConstructor(param, this.globalDataObject).then((factoryResponse: ISitePageObject) => {
    //
    //   const template = factoryResponse.options.template;
    //   const areas = factoryResponse.contentItems[0].areas;
    //
    //   // add a title object?
    //
    //   responseToSend.render(template, {
    //     pageData: {
    //       routes: this.getPageProps('GET_ROUTES'),
    //     },
    //     viewData: areas,
    //   });
    // }).catch((err: string) => {
    //   responseToSend.render('error.hbs', {
    //     pageData: [],
    //     viewData: err,
    //   });
    // });

    // responseToSend.send('yes')

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
