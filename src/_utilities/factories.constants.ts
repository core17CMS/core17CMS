import { LandingpageFactory } from '../_factories/landingpage.factory';
import { StandardpageFactory } from '../_factories/standardpage.factory';
import { FeaturedpageFactory } from '../_factories/featuredpage.factory';
import { ContactpageFactory } from '../_factories/contactpage.factory';
import { NewspageFactory } from '../_factories/newspage.factory';
import { BlogpageFactory } from '../_factories/blogpage.factory';
import { HomepageFactory } from '../_factories/homepage.factory';
import { ErrorpageFactory } from '../_factories/errorpage.factory';



export const PAGE_FACTORIES = {
    'LANDING_PAGE': LandingpageFactory,
    'STANDARD_PAGE': StandardpageFactory,
    'FEATURED_PAGE': FeaturedpageFactory,
    'CONTACT_PAGE': ContactpageFactory,
    'NEWS_PAGE': NewspageFactory,
    'BLOG_PAGE': BlogpageFactory,
    'HOME_PAGE': HomepageFactory,
    'ERROR_PAGE': ErrorpageFactory,
};
