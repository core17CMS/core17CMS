import { LandingPageFactory } from '../_factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/newspage.factory';
import { BlogPageFactory } from '../_factories/blogpage.factory';
import { HomePageFactory } from '../_factories/homepage.factory';
import { ErrorPageFactory } from '../_factories/errorpage.factory';

// BlogareaFactory
// ButtonareaFactory


export const PAGE_FACTORIES = {
  'LANDING_PAGE': LandingPageFactory,
  'STANDARD_PAGE': StandardPageFactory,
  'FEATURED_PAGE': FeaturedPageFactory,
  'CONTACT_PAGE': ContactPageFactory,
  'NEWS_PAGE': NewsPageFactory,
  'BLOG_PAGE': BlogPageFactory,
  'HOME_PAGE': HomePageFactory,
  'ERROR_PAGE': ErrorPageFactory,
};

export const AREA_FACTORIES = {};

export const ELEMENT_FACTORIES = {};
