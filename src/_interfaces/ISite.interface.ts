import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';


export interface ISite {
  errorPage: ISitePageObject;
  pages: ISitePageObject[];
}

export interface ISitePageObject {
  route: IRouteObject;
  type: string;
  options: ISiteOptions;
  contentItems: ISiteContentItems[];
}

export interface IRouteObject {
  routeString: string;
  routeActual: string;
  routeShown: boolean;
  subRoutes: string[];
}

export interface ISiteContentItems {
  content: string;
  areas: IGenericContent[]
}

export interface ISiteOptions {
  template: string;
}

export interface IRouteResponse {
  id: string;
}


      // AREA INTERFACES //

export interface IBlogArea {
  areaName: string;
  type: string;
  options: any;
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  blogArea: Array<IFeatureElement | IBlogElement>[];
}

export interface IButtonArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  guttonArea: Array<IButtonElement>[];
}

export interface IFeatureArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  featureArea: Array<IFeatureElement>[];
}

export interface IFooterArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  footerArea: Array<IImageElement | ITextElement | ILinklistElement>[];
}

export interface IGenericArea {
  areaName: string;
  type: string;
  options: any;
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  genericArea: Array<any>[];
}

export interface IJumbotronArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  jumbotronArea: Array<IJumbotronElement | IImageElement | ITextElement | IButtonElement>[];
}

export interface ILinklistArea {
  areaName: string;
  type: string;
  options: any;
  title: string;
  subTitle: string;
  allowedTypes: string[];
  linklistArea: Array<ILinklistElement | IButtonElement>[];
}

export interface INewsArea {
  areaName: string;
  type: string;
  options: any;
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  newsArea: Array<IFeatureElement | INewsElement>[];
}

export interface IFormArea {
  areaName: string;
  type: string;
  options: any;
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  formArea: Array<ITextElement | IButtonElement | IFormElement>[];
}

export interface IHeaderArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  headerArea: Array<ITextElement | IImageElement | ILinklistElement>[];
}

export interface ITextArea {
  areaName: string;
  type: string;
  options: any;
  allowedTypes: string[];
  textArea: ITextElement[];
}

      // ELEMENT INTERFACES //

export interface IBlogElement {}

export interface IJumbotronElement {}

export interface IFeatureElement {}

export interface INewsElement {}

export interface ITextElement {}

export interface IImageElement {}

export interface ILinklistElement {}

export interface IButtonElement {}

export interface IFormElement {}

export interface IGenericElement {
  elementName: string;
  genericElement: string;
}

export interface IGenericContent {
  areaName: string;
  genericArea: IGenericElement[];
}





export interface IDatabaseQueryResolution {
  status: string;
  payload: any;
}
