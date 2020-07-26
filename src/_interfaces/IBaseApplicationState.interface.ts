import { IAppMetaDataInterface } from './appMetaData/IAppMetaData.interface';
import { BasePageClass } from '../_classes/base-page.class';

export interface IBaseApplicationStateInterface {
  appMetaData: IAppMetaDataInterface | {};
  //@TODO Type this.
  pages: Array<BasePageClass | []>;
}
