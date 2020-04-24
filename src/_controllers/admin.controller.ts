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

  @Get('tmps')
  public async serveTemplates() {
    let templatePayload = {};
    await FileService.querySiteTemplates().then((response: any) => {
      templatePayload = response.payload;
    }).catch(() => {
      templatePayload = 'Error!';
    });
    return templatePayload;
  }

  @Get('base')
  public async serveBase() {
    let basePayload = {};
    await FileService.queryDb('site').then((response: any) => {
      basePayload = response.payload;
    }).catch((error: any) => {
      Log(error);
      basePayload = 'ERROR';
    });
    return basePayload;
  }

  @Get()
  public serveCorePanelAdmin(@Res() responseToSend: any) {
    responseToSend.render('admin.hbs');
  }


  @Post('access')
  public getDb(@Body() body: any, @Headers() headers, @Res() responseToSend: any) {
    console.log(body);
    console.log(headers.ye);
    responseToSend.render('admin.hbs');
  }

  // @TODO: This isn't nice, or tidy, or good, really. It needs re-doing.
  @Post('element_update')
  public updateElement(@Body() body: any, @Headers() headers, @Res() res: any) {

    let db: ISite;
    let status: number;

    FileService.queryDb('site').then((response: IDatabaseQueryResolution) => {
      db = response.payload;
    }).then(() => {
      if (db) {
        try {
          for (let a = 0; a < db.pages.length; a++) {
            for (let b = 0; b < db.pages[a].contentItems.length; b++) {
              for (let c = 0; c < db.pages[a].contentItems[b].areas.length; c++) {
                for (let d = 0; d < db.pages[a].contentItems[b].areas[c][this.areaTypeFinder(db.pages[a].contentItems[b].areas[c].type)].length; d++) {
                  if (db.pages[a].contentItems[b].areas[c][this.areaTypeFinder(db.pages[a].contentItems[b].areas[c].type)][d].elementId === body.elementId) {
                    db.pages[a].contentItems[b].areas[c][this.areaTypeFinder(db.pages[a].contentItems[b].areas[c].type)][d] = body;
                  }
                }
              }
            }
          }
          status = 200;
        } catch (e) {
          status = 500;
        }
      } else {
        status = 500;
      }
    }).then(() => {
      if (db) {
        FileService.updateDb('site', db).then(() => {
          status = 200;
        }).catch((error: IDatabaseQueryResolution) => {
          status = 500;
          Log(error.payload);
        });
      }
    }).finally(() => {
      res.send({ status: status });
    }).catch((error: IDatabaseQueryResolution) => {
      Log(error.payload);
    });


  }

  public areaTypeFinder(areaType): string {
    const areaTypes = [
      'BLOG_AREA',
      'BUTTON_AREA',
      'FEATURE_AREA',
      'FOOTER_AREA',
      'GENERIC_AREA',
      'JUMBOTRON_AREA',
      'LINKLIST_AREA',
      'NEWS_AREA',
      'FORM_AREA',
      'HEADER_AREA',
      'TEXT_AREA',
    ];
    const areaProps = ['blogArea',
      'buttonArea',
      'featureArea',
      'footerArea',
      'genericArea',
      'jumbotronArea',
      'linklistArea',
      'newsArea',
      'formArea',
      'headerArea',
      'textArea',
    ];
    for (let i = 0; i < areaTypes.length; i++) {
      if (areaTypes[i] === areaType) {
        return areaProps[i];
      }
    }
  };

}
