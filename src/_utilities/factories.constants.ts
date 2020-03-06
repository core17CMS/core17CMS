import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';
import { HomePageFactory } from '../_factories/_page-factories/homepage.factory';
import { ErrorPageFactory } from '../_factories/_page-factories/errorpage.factory';

// BlogAreaFactory
// ButtonAreaFactory
// FeatureAreaFactory
// FooterAreaFactory
// FormAreaFactory
// GenericAreaFactory
// HeaderAreaFactory
// JumbotronAreaFactory
// NewsAreaFactory
// TeaserAreaFactory
// TextAreaFactory


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
