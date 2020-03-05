import { LandingPageFactory } from '../_factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/newspage.factory';
import { BlogPageFactory } from '../_factories/blogpage.factory';

export type TPageObject = LandingPageFactory | StandardPageFactory | FeaturedPageFactory | ContactPageFactory | NewsPageFactory | BlogPageFactory;
