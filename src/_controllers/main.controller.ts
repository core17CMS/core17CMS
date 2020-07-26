import { Controller, Get, Param, Res, Redirect } from '@nestjs/common';

import { FileService } from '../_services/file.service';
//
// import { TAreaObject, TElementObject, TPageObject } from './../_utilities/custom.types';
//
import {
  ISite,
  ISitePageObject,
  IRouteResponse,
  IRouteObject,
  IDatabaseQueryResolution,
} from '../_interfaces/ISite.interface';
//
// import { Log, CALL_PAGE_FACTORY } from '../_utilities/base.constants';
//
// import { PageFactory } from './../_factories/page.factory';
import { BasePageClass } from '../_classes/base-page.class';
import { IBasePageInterface } from '../_interfaces/basePageClass/IBasePage.interface';
import {
  IAppMetaDataInterface,
  IPageMetaData,
  IRouteStructure,
} from '../_interfaces/appMetaData/IAppMetaData.interface';
import { IBaseApplicationStateInterface } from '../_interfaces/IBaseApplicationState.interface';


@Controller()
export class MainController {

  private baseApplicationState: IBaseApplicationStateInterface = {
    appMetaData: {},
    pages: []
  };

  //@TODO Extract this to config.
  private dbString = 'site_new';

  constructor() {
    const initialisedBasePages: BasePageClass[] = [];
    this.getPages().then((baseApplicationState) => {
      baseApplicationState.pages.forEach((page) => initialisedBasePages.push(BasePageClass.makeSingle(page)))
      this.baseApplicationState.appMetaData = baseApplicationState.app_meta_data;
      this.baseApplicationState.pages = initialisedBasePages;
    });
  }


  /*
   * @Param Query DB for site object.
   */

  private async getPages(pageRoute?: string): Promise<any> {

    const applicationPayload = await FileService.queryDb(this.dbString).then(async (response: IDatabaseQueryResolution) => {
      return response.payload;
    }).catch((error: IDatabaseQueryResolution) => {
      //@TODO Handle this.
    });

    if (pageRoute) {
      const page = applicationPayload.pages.find(page => page.page_route === pageRoute)
      return BasePageClass.makeSingle(page);
    } else {
      return applicationPayload;
    }
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

    // console.log(this.getPages(param.id).then(page => page))

    const pageToRender: BasePageClass = await this.getPages(param.id).then((page: BasePageClass) => {
      return page;
    });

    console.log(pageToRender)

    if (!!pageToRender) {
      responseToSend.render(pageToRender.pageOptions.page_template, {
        metaData: await this.constructPageMetaData(pageToRender),
        viewData: 'yes',
      });
    }

  }

  public constructPageMetaData(pageToRender: BasePageClass): IPageMetaData {

    const routeList: IRouteStructure[] = [];

    this.baseApplicationState.pages.forEach((pageData: BasePageClass) => {
      routeList.push({
        routeLink: pageData.pageRoute,
        routeAlias: pageData.pageName,
      });
    });

    return {
      pageTitle: pageToRender.pageName,
      appTitle: 'app_name' in this.baseApplicationState.appMetaData ? this.baseApplicationState.appMetaData.app_name : '',
      routes: routeList,
    };

  }

  // public getPageProps(command: string): string[] {
  //
  //   const commandSet = {
  //     'GET_ROUTES': () => {
  //       const routes: IRouteObject[] = [];
  //
  //       this.globalDataObject.pages.forEach((page) => {
  //         if (page.route.routeShown) {
  //           routes.push(page.route);
  //         }
  //       });
  //       return routes;
  //     },
  //   };
  //
  //   return commandSet[command]();
  //
  // }

  /*
   * @Param Does the business of actually constructing the page object to be sent back to the client side.
   */

  // public async routeConstructor(routeIdObject: IRouteResponse, globalDataObject: ISite): Promise<ISitePageObject | string> {
  //
  //   const routeItem: ISitePageObject = await globalDataObject.pages.find(pageObject => pageObject.route.routeActual === routeIdObject.id);
  //   const localFactory: TPageObject | TAreaObject | TElementObject = await this.factoryBuilder(routeItem);
  //
  //   return new Promise((resolve, reject) => {
  //
  //     if (localFactory) {
  //       localFactory.init()
  //         .then((res: ISitePageObject) => {
  //           resolve(res);
  //         }).catch(() => {
  //         console.log('CAUGHT ERROR!');
  //         reject('404 Page Not Found.');
  //       });
  //     } else {
  //       reject('404 Page Not Found.');
  //     }
  //   });
  //
  // }

  /*
   * @Param Returns the appropriate page factory in an uninitialised state.
   */

  // public factoryBuilder(routeItem: ISitePageObject): TPageObject | TAreaObject | TElementObject {
  //
  //   if (!routeItem) {
  //     routeItem = this.globalDataObject.errorPage;
  //   }
  //
  //   return new PageFactory(routeItem).call(CALL_PAGE_FACTORY);
  //
  // }

}
