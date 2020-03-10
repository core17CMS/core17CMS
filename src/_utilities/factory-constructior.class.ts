import { CALL_AREA_FACTORY, CALL_ELEMENT_FACTORY, CALL_PAGE_FACTORY, Log } from './base.constants';
import {
  IAreaCollective,
  IElementCollective,
  ISiteContentItems,
  ISitePageObject,
} from '../_interfaces/ISite.interface';
import { PageFactory } from '../_factories/page.factory';

export class FactoryConstructor {

  public static constructPageAreas(areaList): ISiteContentItems[] {

    const pageAreas = areaList;

    pageAreas.forEach((areaList: ISiteContentItems) => {
      areaList.areas.forEach((area: IAreaCollective) => {
        const factory = new PageFactory(area).call(CALL_AREA_FACTORY);
        factory.init().then((areaContent: IAreaCollective) => {
          area = areaContent;
        }).catch((e) => {
          Log(e);
        })
      })
    });

    return pageAreas;

  }

}
