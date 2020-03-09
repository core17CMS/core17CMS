import { CALL_PAGE_FACTORY, CALL_ELEMENT_FACTORY, CALL_AREA_FACTORY } from '../_utilities/base.constants';
import { PAGE_FACTORIES, ELEMENT_FACTORIES, AREA_FACTORIES } from '../_utilities/factories.constants';
import { ISitePageObject, IAreaCollective, IElementCollective } from '../_interfaces/ISite.interface';
import { TPageObject, TAreaObject, TElementObject } from '../_utilities/custom.types';

export class PageFactory {

  constructor(public factoryQueryObject: ISitePageObject | IAreaCollective | IElementCollective) {

  }

  public call(factoryRouteQuery: string):  TPageObject | TAreaObject | TElementObject {

    switch (factoryRouteQuery) {
      case CALL_PAGE_FACTORY:
        return this.pageFactoryReturner();
      case CALL_AREA_FACTORY:
        return this.areaFactoryReturner();
      case CALL_ELEMENT_FACTORY:
        return this.elementFactoryReturner();
    }

  }

  public pageFactoryReturner(): TPageObject {
    return new PAGE_FACTORIES[this.factoryQueryObject.type](this.factoryQueryObject);
  }

  public areaFactoryReturner(): TAreaObject {
    return new AREA_FACTORIES[this.factoryQueryObject.type](this.factoryQueryObject);
  }

  public elementFactoryReturner(): TElementObject {
    return new ELEMENT_FACTORIES[this.factoryQueryObject.type](this.factoryQueryObject);
  }

}
