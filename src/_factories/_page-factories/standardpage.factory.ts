import { ISitePageObject } from '../../_interfaces/ISite.interface';
import { FactoryConstructor } from '../../_utilities/factory-constructior.class';

export class StandardPageFactory {
  constructor(private pageItems: ISitePageObject) {
    console.log('standardpage constructor called!');
  }

  public async init() {

    this.pageItems.contentItems = await FactoryConstructor.constructPageAreas(this.pageItems.contentItems);

    return new Promise((resolve, reject) => {
      this.pageItems.contentItems ? resolve(this.pageItems) : reject('ERROR');
    });

  }

}
