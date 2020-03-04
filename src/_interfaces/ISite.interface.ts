import { LandingpageFactory } from '../_factories/landingpage.factory';
import { StandardpageFactory } from '../_factories/standardpage.factory';
import { FeaturedpageFactory } from '../_factories/featuredpage.factory';
import { ContactpageFactory } from '../_factories/contactpage.factory';
import { NewspageFactory } from '../_factories/newspage.factory';
import { BlogpageFactory } from '../_factories/blogpage.factory';


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
  content: string;
}

export interface ISiteOptions {
  template: string;
}

export interface IRouteResponse {
  id: string;
}
