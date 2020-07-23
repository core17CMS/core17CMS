import { IPageOptions } from './IPageOptions.interface';

export interface IBasePageInterface {
  page_id: string;
  page_type: string;
  page_name: string;
  page_route: string;
  page_order: number;
  page_options: IPageOptions;
  page_content_items: Array<any>;
}
