import { Controller, Get, Param, Res, Redirect, Post, Body, Headers } from '@nestjs/common';

import { FileService } from '../_services/file.service';
import { STATUS_FAILED, STATUS_OK } from '../_utilities/base.constants';
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
// import { BaseC}
import { IBasePageInterface } from '../_interfaces/basePageClass/IBasePage.interface';
import {
  IAppMetaDataInterface,
  IPageMetaData,
  IRouteStructure,
} from '../_interfaces/appMetaData/IAppMetaData.interface';
import {
  IBaseApplicationDataBaseQuery,
  IBaseApplicationStateInterface,
} from '../_interfaces/IBaseApplicationState.interface';


@Controller()
export class MainController {


  private baseApplicationState: IBaseApplicationStateInterface = {
    appMetaData: {},
    pages: [],
  };

  //@TODO Extract this to config.
  private dbString = 'site_new';


  constructor() {
    this.getPages().then((baseApplicationState) => {
      this.assignDbStateToBaseApplicationState(baseApplicationState);
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
      const page = applicationPayload.pages.find(page => page.page_route === pageRoute);
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

    const pageToRender: BasePageClass = this.baseApplicationState.pages.find((page: BasePageClass) => page.pageRoute === param.id) as BasePageClass;

    if (!!pageToRender) {
      responseToSend.render(pageToRender.pageOptions.page_template, {
        metaData: await this.constructPageMetaData(pageToRender),
        viewData: 'yes',
      });
    }

  }




  @Post('update/:id')
  public async updateSite(@Body() body: IBasePageInterface, @Headers() headers, @Res() res: any, @Param() param: any) {

    const routeId = param.id;
    let db: IBaseApplicationDataBaseQuery = {
      app_meta_data: {
        app_name: '',
      },
      pages: [],
    };

    await FileService.queryDb(this.dbString).then((response: IDatabaseQueryResolution) => {
      db.app_meta_data = response.payload.app_meta_data;
      db.pages = response.payload.pages;
    });

    db = await this.manipulateDatabaseModelObject(db, body, routeId);

    await FileService.updateDb(this.dbString, db).then(async (response: IDatabaseQueryResolution) => {
      if (response.status === STATUS_OK) {
        await this.getPages().then((baseApplicationState) => {
          this.assignDbStateToBaseApplicationState(baseApplicationState);
        });
      }
    });

    res.send(200);

  }




  public manipulateDatabaseModelObject(db: IBaseApplicationDataBaseQuery, body: IBasePageInterface, routeId: string) {

    const individualPageObject: IBasePageInterface = db.pages.find(page => page.page_id === routeId);

    for (const [key, value] of Object.entries(body)) {
      if (individualPageObject.hasOwnProperty(key)) {
        individualPageObject[key] = value;
      }
    }

    return db;

  }




  public assignDbStateToBaseApplicationState(baseApplicationState: any) {

    const initialisedBasePages: BasePageClass[] = [];

    this.baseApplicationState.appMetaData = {};
    this.baseApplicationState.pages = [];

    baseApplicationState.pages.forEach((page) => initialisedBasePages.push(BasePageClass.makeSingle(page)));

    this.baseApplicationState.appMetaData = baseApplicationState.app_meta_data;
    this.baseApplicationState.pages = initialisedBasePages;

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




}
