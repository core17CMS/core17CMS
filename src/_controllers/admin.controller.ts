import { Controller, Get, Res, Post, Body, Headers, Req } from '@nestjs/common';
import { FileService } from '../_services/file.service';
import { ISite, IDatabaseQueryResolution } from '../_interfaces/ISite.interface';
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

  @Get('gettemplates')
  public async serveTeplates() {
      let templatePayload = {};
      await FileService.querySiteTemplates().then((response: any) => {
        // console.log(response);
        templatePayload = response.payload;
        // return 'ok';
      }).catch(() => {
        // return "Error!";
      })
      // console.log('ye');
      // console.log(templatePayload);
      // responseToSend.json(templatePayload);
      return templatePayload;
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
