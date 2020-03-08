import { IAreaCollective } from './../../_interfaces/ISite.interface';
// import { ISitePageObject } from '../../_interfaces/ISite.interface';

export class GenericAreaFactory {
  constructor(private areaObject: IAreaCollective) {
    console.log('generic area constructor called!');
  }

  public init() {

    const allGood = true;

    return new Promise((resolve, reject) => {

      if (allGood) {
        resolve(this.areaObject);
      } else {
        reject(console.log('Not so good.'));
      }

    });
  }

}
