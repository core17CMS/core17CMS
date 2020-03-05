import { LandingPageFactory } from '../_factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/newspage.factory';
import { BlogPageFactory } from '../_factories/blogpage.factory';


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

export interface IGenericContent {
  areaName: string;
  genericArea: IGenericElement[];
}

export interface IGenericElement {
  elementName: string;
  genericElement: string;
}

export interface ISiteOptions {
  template: string;
}

export interface IRouteResponse {
  id: string;
}
