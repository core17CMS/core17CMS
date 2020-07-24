export interface IAppMetaDataInterface {
  app_name: string;
}

export interface IPageMetaData {
  pageTitle: string;
  appTitle: string;
  routes: Array<IRouteStructure>;
}

export interface IRouteStructure {
  routeLink: string,
  routeAlias: string;
}
