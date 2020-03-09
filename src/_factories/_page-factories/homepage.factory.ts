import { Log } from '../../_utilities/base.constants';
import { CALL_AREA_FACTORY } from '../../_utilities/base.constants';
import { PageFactory } from '../page.factory';
import { ISitePageObject, IAreaCollective, ISiteContentItems } from '../../_interfaces/ISite.interface';

export class HomePageFactory {

    constructor(private pageItems: ISitePageObject) {
      console.log('homepage constructor called!');
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
