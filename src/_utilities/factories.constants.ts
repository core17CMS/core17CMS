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


// BlogElementFactory
// ButtonElementFactory
// FeatureElementFactory
// FormElementFactory
// GenericElementFactory
// ImageElementFactory
// JumbotronElementFactory
// LinklistElementFactory
// NewsElementFactory
// TextElementFactory




export const PAGE_FACTORIES = {
  'BLOG_PAGE': BlogPageFactory,
  'CONTACT_PAGE': ContactPageFactory,
  'ERROR_PAGE': ErrorPageFactory,
  'FEATURED_PAGE': FeaturedPageFactory,
  'HOME_PAGE': HomePageFactory,
  'LANDING_PAGE': LandingPageFactory,
  'NEWS_PAGE': NewsPageFactory,
  'STANDARD_PAGE': StandardPageFactory,
};

export const AREA_FACTORIES = {};

export const ELEMENT_FACTORIES = {};
