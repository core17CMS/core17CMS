import { ISitePageObject } from '../../_interfaces/ISite.interface';

export class HomePageFactory {
    constructor(private pageItems: ISitePageObject) {
      console.log('homepage constructor called!');
    }
  
    public init() {
  
      const allGood = true;
  
      return new Promise((resolve, reject) => {

        console.log(this.pageItems.contentItems);


  
        if (allGood) {
          resolve(this.pageItems);
        } else {
          reject(console.log('Not so good.'));
        }
  
      });
    }

    // public constructPageAreas(): Promise<any> {
    //   // return new Promise
    // }
    //
  }
