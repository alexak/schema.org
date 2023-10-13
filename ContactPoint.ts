
import Thing from './Thing';
import AdministrativeArea from './AdministrativeArea';
import GeoShape from './GeoShape';
import Place from './Place';
import OpeningHoursSpecification from './OpeningHoursSpecification';
import Product from './Product';

export default interface ContactPoint extends Thing {
  areaServed?: AdministrativeArea | GeoShape | Place | string;
  availableLanguage?: string;
  contactOption?: 'HearingImpairedSupported' | 'TollFree';
  contactType?: string;
  email?: string;
  faxNumber?: string;
  hoursAvailable?: OpeningHoursSpecification;
  productSupported?: Product | string;
  telephone?: string;
}



