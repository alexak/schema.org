
/**
 * Service interface 
 * @see {@link https://schema.org/Service}
 */

import AdministrativeArea from './AdministrativeArea';
import AggregateRating from './AgregateRating';
import Audience from './Audience';
import Brand from './Brand';
import CategoryCode from './CategoryCode';
import Demand from './Demand';
import GeoShape from './GeoShape';
import ImageObject from './ImageObject';
import Offer from './Offer';
import OfferCatalog from './OfferCatalog';
import OpeningHoursSpecification from './OpeningHoursSpecification';
import Organization from './Organization';
import Person from './Person';
import Place from './Place';
import Product from './Product';
import Review from './Review';
import ServiceChannel from './ServiceChannel';
import Thing from './Thing';

export default interface Service extends Thing {
  aggregateRating?: AggregateRating;
  areaServed?: AdministrativeArea | GeoShape | Place | string;
  audience?: Audience;
  availableChannel?: ServiceChannel;
  award?: string;
  brand?: Brand | Organization;
  broker?: Organization | Person;
  category?: CategoryCode | 'AerobicActivity' | 'AnaerobicActivity' | 'Balance' | 'Flexibility' | 'LeisureTimeActivity' | 'OccupationalActivity' | 'StrengthTraining' | string | Thing ;
  hasOfferCatalog?: OfferCatalog;
  hoursAvailable?: OpeningHoursSpecification;
  isRelatedTo?: Product | Service;
  isSimilarTo?: Product | Service;
  logo?: ImageObject | string;
  offers?: Demand | Offer;
  provider?: Organization | Person;
  providerMobility?: string;
  review?: Review;
  serviceOutput?: Thing;
  serviceType?: 'BasicIncome' | 'BusinessSupport' | 'DisabilitySupport' | 'HealthCare' | 'OneTimePayments' | 'PaidLeave' | 'ParentalSupport' | 'UnemploymentSupport'  | string;
  slogan?: string;
  termsOfService?: string | URL;
}


