
/**
 * webpage interface 
 * @see {@link https://schema.org/webpage}
 */
import BreadcrumbList from './BreadcrumbsList';
import CreativeWork from './CreativeWork';
import ImageObject from './ImageObject';
import Organization from './Organization';
import Person from './Person';
import SpeakableSpecification from './SpeakableSpecification';
import Thing from './Thing';
import WebPageElement from './WebPageElement';

export default interface WebPage extends Thing, CreativeWork{
  breadcrumb?: BreadcrumbList | string;
  lastReviewed?: string;
  mainContentOfPage?: WebPageElement;
  primaryImageOfPage?: ImageObject;
  relatedLink?: string;
  reviewedBy?: Organization | Person;
  significantLink?: string;
  speakable?: SpeakableSpecification | string;
  specialty?: string;
}
