

import { Controller, Get, Param, Res, Redirect } from '@nestjs/common';

import { FileService } from '../_services/file.service';

import { TAreaObject, TElementObject, TPageObject } from './../_utilities/custom.types';

import { ISite, ISitePageObject, IRouteResponse, IRouteObject, IDatabaseQueryResolution } from '../_interfaces/ISite.interface';

import { Log, CALL_PAGE_FACTORY } from '../_utilities/base.constants';

import { PageFactory } from './../_factories/page.factory'
import { BasePageClass } from '../_classes/base-page.class';
import { IBasePageInterface } from '../_interfaces/basePageClass/IBasePage.interface';
import {
  IAppMetaDataInterface,
  IPageMetaData,
  IRouteStructure,
} from '../_interfaces/appMetaData/IAppMetaData.interface';


@Controller()
export class MainController {


  private globalDataObject: ISite;
  private listOfBasePages: BasePageClass[];
  private appMetaData: IAppMetaDataInterface;


  /*
   * @Param construct page.
   */

  constructor() {
    this.initialiseDatabaseState().then((basePages: BasePageClass[]) => this.listOfBasePages = basePages);
  }


  /*
   * @Param Query DB for site object.
   */

  private async initialiseDatabaseState(): Promise<Array<BasePageClass>> {

    const listOfBasePages: BasePageClass[] = [];

    await FileService.queryDb('site_new').then((response) => {
        response.payload.pages.forEach((page: IBasePageInterface) => {
          listOfBasePages.push(BasePageClass.makeSingle(page));
        });
        this.appMetaData = response.payload.app_meta_data;
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

    const pageToRender: BasePageClass = await this.listOfBasePages.find(page => page.pageRoute === param.id);

    if(!!pageToRender) {
      responseToSend.render(pageToRender.pageOptions.page_template, {
        metaData: await this.constructPageMetaData(pageToRender),
        viewData: 'yes'
      })
    }

  }

  public constructPageMetaData(pageToRender: BasePageClass): IPageMetaData {

    const routeList: IRouteStructure[] = [];

    this.listOfBasePages.forEach((pageData) => {
      routeList.push({
        routeLink: pageData.pageRoute,
        routeAlias: pageData.pageName
      })
    })

    return {
      pageTitle: pageToRender.pageName,
      appTitle: this.appMetaData.app_name,
      routes: routeList
    }

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
