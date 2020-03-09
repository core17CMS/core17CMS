import { IBlogArea, IButtonArea, IFeatureArea, IFooterArea, IGenericArea, IJumbotronArea, ILinklistArea, INewsArea, IFormArea, IHeaderArea, ITextArea } from './../_interfaces/ISite.interface';
import { LandingPageFactory } from '../_factories/_page-factories/landingpage.factory';
import { StandardPageFactory } from '../_factories/_page-factories/standardpage.factory';
import { FeaturedPageFactory } from '../_factories/_page-factories/featuredpage.factory';
import { ContactPageFactory } from '../_factories/_page-factories/contactpage.factory';
import { NewsPageFactory } from '../_factories/_page-factories/newspage.factory';
import { BlogPageFactory } from '../_factories/_page-factories/blogpage.factory';

import { BlogAreaFactory } from '../_factories/_area-factories/blogarea.factory'
import { ButtonAreaFactory } from '../_factories/_area-factories/buttonarea.factory';
import { FeatureAreaFactory } from '../_factories/_area-factories/featuredarea.factory'
import { FooterAreaFactory } from '../_factories/_area-factories/footerarea.factory';
import { FormAreaFactory } from '../_factories/_area-factories/formarea.factory';
import { GenericAreaFactory } from '../_factories/_area-factories/genericarea.factory';
import { HeaderAreaFactory } from '../_factories/_area-factories/headerarea.factory';
import { JumbotronAreaFactory } from '../_factories/_area-factories/jumbotronarea.factory';
import { NewsAreaFactory } from '../_factories/_area-factories/newsarea.factory';
import { TeaserAreaFactory } from '../_factories/_area-factories/teaserarea.factory';
import { TextAreaFactory } from '../_factories/_area-factories/textarea.factory';

import { BlogElementFactory } from '../_factories/_element-factories/blogelement.factory';
import { ButtonElementFactory } from '../_factories/_element-factories/buttonelement.factory';
import { FeatureElementFactory } from '../_factories/_element-factories/featureelement.factory';
import { FormElementFactory } from '../_factories/_element-factories/formelement.factory';
import { GenericElementFactory } from '../_factories/_element-factories/genericelement.factory';
import { ImageElementFactory } from '../_factories/_element-factories/imageelement.factory';
import { JumbotronElementFactory } from '../_factories/_element-factories/jumbotronelement.factory';
import { LinklistElementFactory } from '../_factories/_element-factories/linklistelement.factory';
import { NewsElementFactory } from '../_factories/_element-factories/newselement.factory';
import { TextElementFactory } from '../_factories/_element-factories/textelement.factory';

export type TPageObject = LandingPageFactory | StandardPageFactory | FeaturedPageFactory | ContactPageFactory | NewsPageFactory | BlogPageFactory;
export type TAreaObject = BlogAreaFactory | ButtonAreaFactory | FeatureAreaFactory | FooterAreaFactory | FormAreaFactory | GenericAreaFactory | HeaderAreaFactory | JumbotronAreaFactory | NewsAreaFactory | TeaserAreaFactory | TextAreaFactory;
export type TElementObject = BlogElementFactory | ButtonElementFactory | FeatureElementFactory | FormElementFactory | GenericElementFactory | ImageElementFactory | JumbotronElementFactory | LinklistElementFactory | NewsElementFactory | TextElementFactory;
