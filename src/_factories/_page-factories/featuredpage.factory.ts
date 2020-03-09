import { IAreaCollective, ISiteContentItems, ISitePageObject } from '../../_interfaces/ISite.interface';
import { PageFactory } from '../page.factory';
import { CALL_AREA_FACTORY, Log } from '../../_utilities/base.constants';

export class FeaturedPageFactory {
  constructor(private pageItems: ISitePageObject) {
    console.log('featured constructor called!');
  }

  public async init() {

    await this.constructPageAreas();

    return new Promise((resolve, reject) => {
      if (this.pageItems) {
        resolve(this.pageItems);
      } else {
        reject(console.log('Not so good.'));
      }
    });

  }

  public constructPageAreas(): void {
    this.pageItems.contentItems.forEach((areaList: ISiteContentItems) => {
      areaList.areas.forEach((area: IAreaCollective) => {
        const factory = new PageFactory(area).call(CALL_AREA_FACTORY);
        factory.init().then((areaContent: IAreaCollective) => {
          area = areaContent;
        }).catch((e) => {
          Log(e);
        })
      })
    })
  }

}
