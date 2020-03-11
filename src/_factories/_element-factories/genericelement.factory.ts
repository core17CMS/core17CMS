import { IGenericElement, IGenericElementFunctionality } from '../../_interfaces/ISite.interface';

export class GenericElementFactory {
  constructor(private elementObject: IGenericElement) {
    console.log('generic element factory called');
  }

  public async init(): Promise<IGenericElement> {

    await this.constructPageElement();

    return new Promise((resolve, reject) => {
      if (this.elementObject) {
        resolve(this.elementObject);
      } else {
        reject(console.log('Not so good.'));
      }
    });
  }

  public constructPageElement() {

    const element: IGenericElementFunctionality = this.elementObject.genericElement;

    element.content = `${element.content} _ ${new Date()}`;

  }

}
