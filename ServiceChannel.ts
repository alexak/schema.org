/**
 * Demand ServiceChannel 
 * @see {@link https://schema.org/ServiceChannel}
 */
import Service from './Service';
import Place from './Place';
import ContactPoint from './ContactPoint';
import PostalAddress from './PostalAddress';
import Thing from './Thing';

export default interface ServiceChannel extends Thing {
  availableLanguage?: string;
  processingTime?: string;
  providesService?: Service;
  serviceLocation?: Place;
  servicePhone?: ContactPoint;
  servicePostalAddress?: PostalAddress;
  serviceSmsNumber?: ContactPoint;
  serviceUrl?: string;
}
