import { IElementCollective, IGenericArea } from './../../_interfaces/ISite.interface';
import { PageFactory } from '../page.factory';
import { CALL_ELEMENT_FACTORY, Log } from '../../_utilities/base.constants';

export class GenericAreaFactory {
  constructor(private areaObject: IGenericArea) {
    console.log('generic area constructor called!');
  }

  public async init(): Promise<IGenericArea> {

    await this.constructPageAreas();

    return new Promise((resolve, reject) => {
      if (this.areaObject) {
        resolve(this.areaObject);
      } else {
        reject(console.log('Not so good.'));
      }
    });

  }

  public constructPageAreas(): void {
    this.areaObject.genericArea.forEach((areaElement: IElementCollective) => {
        const factory = new PageFactory(areaElement).call(CALL_ELEMENT_FACTORY);
        factory.init().then((areaConstructedElementValues: IElementCollective) => {
          areaElement = areaConstructedElementValues;
        }).catch((e) => {
          Log(e);
        })
    })
  }

}
