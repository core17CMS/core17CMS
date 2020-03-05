import { ISitePageObject } from '../_interfaces/ISite.interface';

export class HomePageFactory {
    constructor(private contentItems: ISitePageObject) {
      console.log('homepage constructor called!');
    }
  
    public init() {
  
      const allGood = true;
  
      return new Promise((resolve, reject) => {
  
        if (allGood) {
          resolve(this.contentItems);
        } else {
          reject(console.log('Not so good.'));
        }
  
      });
    }
  
  }
