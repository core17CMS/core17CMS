import {
  TextElementFactory
} from './../_factories/_element-factories/textelement.factory';
import {
  NewsElementFactory
} from './../_factories/_element-factories/newselement.factory';
import {
  LinklistElementFactory
} from './../_factories/_element-factories/linklistelement.factory';
import {
  JumbotronElementFactory
} from './../_factories/_element-factories/jumbotronelement.factory';
import {
  ImageElementFactory
} from './../_factories/_element-factories/imageelement.factory';
import {
  GenericElementFactory
} from './../_factories/_element-factories/genericelement.factory';
import {
  FormElementFactory
} from './../_factories/_element-factories/formelement.factory';
import {
  FeatureElementFactory
} from './../_factories/_element-factories/featureelement.factory';
import {
  ButtonElementFactory
} from './../_factories/_element-factories/buttonelement.factory';
import {
  BlogElementFactory
} from './../_factories/_element-factories/blogelement.factory';

import {
  TextAreaFactory
} from './../_factories/_area-factories/textarea.factory';
import {
  TeaserAreaFactory
} from './../_factories/_area-factories/teaserarea.factory';
import {
  NewsAreaFactory
} from './../_factories/_area-factories/newsarea.factory';
import {
  JumbotronAreaFactory
} from './../_factories/_area-factories/jumbotronarea.factory';
import {
  HeaderAreaFactory
} from './../_factories/_area-factories/headerarea.factory';
import {
  FeatureAreaFactory
} from './../_factories/_area-factories/featuredarea.factory';
import {
  GenericAreaFactory
} from './../_factories/_area-factories/genericarea.factory';
import {
  FormAreaFactory
} from './../_factories/_area-factories/formarea.factory';
import {
  FooterAreaFactory
} from './../_factories/_area-factories/footerarea.factory';
import {
  ButtonAreaFactory
} from './../_factories/_area-factories/buttonarea.factory';
import {
  BlogAreaFactory
} from './../_factories/_area-factories/blogarea.factory';

import {
  LandingPageFactory
} from '../_factories/_page-factories/landingpage.factory';
import {
  StandardPageFactory
} from '../_factories/_page-factories/standardpage.factory';
import {
  FeaturedPageFactory
} from '../_factories/_page-factories/featuredpage.factory';
import {
  ContactPageFactory
} from '../_factories/_page-factories/contactpage.factory';
import {
  NewsPageFactory
} from '../_factories/_page-factories/newspage.factory';
import {
  BlogPageFactory
} from '../_factories/_page-factories/blogpage.factory';
import {
  HomePageFactory
} from '../_factories/_page-factories/homepage.factory';
import {
  ErrorPageFactory
} from '../_factories/_page-factories/errorpage.factory';










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

export const AREA_FACTORIES = {
  'BLOG_AREA': BlogAreaFactory,
  'BUTTON_AREA': ButtonAreaFactory,
  'FEATURE_AREA': FeatureAreaFactory,
  'FOOTER_AREA': FooterAreaFactory,
  'FORM_AREA': FormAreaFactory,
  'GENERIC_AREA': GenericAreaFactory,
  'HEADER_AREA': HeaderAreaFactory,
  'JUMBOTRON_AREA': JumbotronAreaFactory,
  'TEXT_AREA': TextAreaFactory,
  'NEWS_AREA': NewsAreaFactory,
  'TEASER_AREA': TeaserAreaFactory,
};

export const ELEMENT_FACTORIES = {
  'BLOG_ELEMENT': BlogElementFactory,
  'BUTTON_ELEMENT': ButtonElementFactory,
  'FEATURE_ELEMENT': FeatureElementFactory,
  'FORM_ELEMENT': FormElementFactory,
  'GENERIC_ELEMENT': GenericElementFactory,
  'IMAGE_ELEMET': ImageElementFactory,
  'JUMBOTRON_ELEMENT': JumbotronElementFactory,
  'LINKLIST_ELEMENT': LinklistElementFactory,
  'NEWS_ELEMENT': NewsElementFactory,
  'TEXT_ELEMENT': TextElementFactory,
};