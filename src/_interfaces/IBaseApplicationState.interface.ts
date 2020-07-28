import { IAppMetaDataInterface } from './appMetaData/IAppMetaData.interface';
import { BasePageClass } from '../_classes/base-page.class';
import { IBasePageInterface } from './basePageClass/IBasePage.interface';

export interface IBaseApplicationStateInterface {
  appMetaData: IAppMetaDataInterface | {};
  //@TODO Type this.
  pages: Array<BasePageClass | []>;
}

export interface IBaseApplicationDataBaseQuery {
  app_meta_data: IAppMetaDataInterface;
  pages: Array<IBasePageInterface>;
}
