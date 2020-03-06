import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';

export type TPageObject = LandingPageFactory | StandardPageFactory | FeaturedPageFactory | ContactPageFactory | NewsPageFactory | BlogPageFactory;
export type TAreaObject = LandingPageFactory | StandardPageFactory | FeaturedPageFactory | ContactPageFactory | NewsPageFactory | BlogPageFactory;
export type TElementObject = LandingPageFactory | StandardPageFactory | FeaturedPageFactory | ContactPageFactory | NewsPageFactory | BlogPageFactory;

