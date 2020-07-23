import { IPageOptions } from '../_interfaces/basePageClass/IPageOptions.interface';
import { IBasePageInterface } from '../_interfaces/basePageClass/IBasePage.interface';

export class BasePageClass {

  public pageId: string;
  public pageType: string;
  public pageName: string;
  public pageRoute: string;
  public pageOrder: number;
  public pageOptions: IPageOptions;
  public pageContentItems: Array<any>;

  constructor() {
  }

  public setPageId(arg: string): this {
    this.pageId = arg;
    return this;
  }

  public setPageType(arg: string): this {
    this.pageType = arg;
    return this;
  }

  public setPageName(arg: string): this {
    this.pageName = arg;
    return this;
  }

  public setPageRoute(arg: string): this {
    this.pageRoute = arg;
    return this;
  }

  public setPageOrder(arg: number): this {
    this.pageOrder = arg;
    return this;
  }

  public setPageOptions(arg: IPageOptions): this {
    this.pageOptions = arg;
    return this;
  }

  public setPageContentItems(arg: any[]): this {
    this.pageContentItems = arg;
    return this;
  }

  public static makeSingle(basePage: IBasePageInterface) {
    return new BasePageClass()
      .setPageId(basePage.page_id)
      .setPageType(basePage.page_type)
      .setPageName(basePage.page_name)
      .setPageRoute(basePage.page_route)
      .setPageOrder(basePage.page_order)
      .setPageOptions(basePage.page_options)
      .setPageContentItems(basePage.page_content_items)
  }

}
