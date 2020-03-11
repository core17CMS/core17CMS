import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';

export type IAreaCollective = IBlogArea | IButtonArea | IFeatureArea | IFooterArea | IGenericArea | IJumbotronArea | ILinklistArea | INewsArea | IFormArea | IHeaderArea | ITextArea;
export type IElementCollective = IBlogElement | IFeatureElement | IButtonElement | IFormElement | IGenericElement | IImageElement | IJumbotronElement | ILinklistElement | INewsElement | ITextElement;

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
  title: string;
  isStartPage: boolean;
  routeShown: boolean;
  subRoutes: string[];
}


export interface ISiteContentItems {
  content: string;
  areas: IAreaCollective[];
}


export interface ISiteOptions {
  template: string;
}

export interface IRouteResponse {
  id: string;
}

export interface IDatabaseQueryResolution {
  status: string;
  payload: any;
}



// AREA INTERFACES //

interface IAreaBase {
  areaName: string;
  type: string;
  options: IAreaOptions;
}

export interface IAreaOptions {
  selectedDisplayClass: string;
  displayClassOptions: string[];
}

export interface IBlogArea extends IAreaBase {
  allowedTypes: string[];
  blogArea: Array<IFeatureElement | IBlogElement>[];
}

export interface IButtonArea extends IAreaBase {
  allowedTypes: string[];
  buttonArea: IButtonElement[];
}

export interface IFeatureArea extends IAreaBase {
  allowedTypes: string[];
  featureArea: IFeatureElement[];
}

export interface IFooterArea extends IAreaBase {
  allowedTypes: string[];
  footerArea: IImageElement | ITextElement | ILinklistElement[];
}

export interface IGenericArea extends IAreaBase {
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  genericArea: IElementCollective[];
}

export interface IJumbotronArea extends IAreaBase {
  allowedTypes: string[];
  jumbotronArea: IJumbotronElement | IImageElement | ITextElement | IButtonElement[];
}

export interface ILinklistArea extends IAreaBase {
  title: string;
  subTitle: string;
  allowedTypes: string[];
  linklistArea: ILinklistElement | IButtonElement[];
}

export interface INewsArea extends IAreaBase {
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  newsArea: IFeatureElement | INewsElement[];
}

export interface IFormArea extends IAreaBase {
  title: string;
  subTitle: string;
  text: string;
  allowedTypes: string[];
  formArea: ITextElement | IButtonElement | IFormElement[];
}

export interface IHeaderArea extends IAreaBase {
  allowedTypes: string[];
  headerArea: ITextElement | IImageElement | ILinklistElement[];
}

export interface ITextArea extends IAreaBase {
  allowedTypes: string[];
  textArea: ITextElement[];
}



// ELEMENT INTERFACES //

interface IElementBase {
  elementName: string;
  type: string;
  options: IElementOptions;
}

export interface IElementOptions {
  selectedDisplayClass: string;
  displayClassOptions: string[];
}

export interface IGenericElement extends IElementBase {
  genericElement: IGenericElementFunctionality;
}
export interface IGenericElementFunctionality {
  content: string;
}


export interface ILinklistElement extends IElementBase {
  linklistElement: ILinklistElementFunctionality;
}
export interface ILinklistElementFunctionality {
  linklistTitle: string;
  linkList: ILinklistElementLinkListActual[];
}
export interface ILinklistElementLinkListActual {
  linkText: string;
  linkUrl: string;
}


export interface IButtonElement extends IElementBase {
  buttonElement: IButtonElementFunctionality;
}
export interface IButtonElementFunctionality {
  buttonText: string;
  buttonUrl: string;
}


export interface IJumbotronElement extends IElementBase {
  jumbotronElement: IJumbotronElementFunctionality;
}
export interface IJumbotronElementFunctionality {
  image: any;
  video: any;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}


export interface IFeatureElement extends IElementBase {
  featureElement: IFeatureElementFunctionality;
}
export interface IFeatureElementFunctionality {
  image: any;
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
}


export interface IImageElement extends IElementBase {
  imageElement: IImageElementFunctionality;
}
export interface IImageElementFunctionality {
  image: any;
}


export interface ITextElement extends IElementBase {
  textElement: ITextElementFunctionality;
}
export interface ITextElementFunctionality {
  text: string;
}


export interface IBlogElement extends IElementBase {
  blogElement: IBlogElementFunctionality;
}
export interface IBlogElementFunctionality {
  title: string;
  text: string;
  date: string;
}


export interface INewsElement extends IElementBase {
  newsElement: INewsElementFunctionality;
}
export interface INewsElementFunctionality {
  title: string;
  text: string;
  date: string;
}


export interface IFormElement extends IElementBase {
  formElement: IFormElementFunctionality;
}
export interface IFormElementFunctionality {
  title: string;
  text: string;
  form: any[];
  submitButtonText: string;
}





