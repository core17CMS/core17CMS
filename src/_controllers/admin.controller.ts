import { Controller, Get, Param, Res, Post, Body, Headers } from '@nestjs/common';
import { AppService } from '../_services/app.service';
import { FileService } from '../_services/file.service';
import { ISite, ISiteContentItems,ISiteOptions, ISitePageObject, IRouteResponse } from '../_interfaces/ISite.interface';
import { IDatabaseQueryResolution } from '../_interfaces/IDatabaserQueryResolution.interface';
import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';
import { Log } from '../_utilities/base.constants';

// @Todo Need to actually apply interfaces to everything in here.



@Controller('corepanel')
export class AdminController {

  private globalDataObject: ISite;

  constructor() {

    this.initialiseDatabaseState();

  }

  private initialiseDatabaseState(): void {
    FileService.queryDb('site').then((response: IDatabaseQueryResolution) => {
      this.globalDataObject = response.payload;
    }).catch((error: IDatabaseQueryResolution) => {
        Log(error.payload);
    });
  }


  @Get()
  public serveCorePanelAdmin(@Res() responseToSend: any) {
      responseToSend.render('admin.hbs');
  }


  @Post('access')
  public getDb(@Body() body: any, @Headers() headers, @Res() responseToSend: any) {

    console.log(body);
    console.log(headers.ye)

    responseToSend.render('admin.hbs');

  }


}
