import { BlogPageFactory } from './blogpage.factory';
import { ContactPageFactory } from './contactpage.factory';
import { FeaturedPageFactory } from './featuredpage.factory';
import { LandingPageFactory } from './landingpage.factory';
import { NewsPageFactory } from './newspage.factory';
import { StandardPageFactory } from './standardpage.factory';

import { ISitePageObject } from '../../_interfaces/ISite.interface';

export class PageFactory {

  public static BlogFactory(routeItem: ISitePageObject): BlogPageFactory {
    return new BlogPageFactory(routeItem);
  }

  public static FeaturedFactory(routeItem: ISitePageObject): FeaturedPageFactory {
    return new FeaturedPageFactory(routeItem);
  }

  public static LandingFactory(routeItem: ISitePageObject): LandingPageFactory {
    return new LandingPageFactory(routeItem);
  }

  public static NewsFactory(routeItem: ISitePageObject): NewsPageFactory {
    return new NewsPageFactory(routeItem);
  }

  public static StandardFactory(routeItem: ISitePageObject): StandardPageFactory {
    return new StandardPageFactory(routeItem);
  }

  public static ContactFactory(routeItem: ISitePageObject): ContactPageFactory {
    return new ContactPageFactory(routeItem);
  }

}
