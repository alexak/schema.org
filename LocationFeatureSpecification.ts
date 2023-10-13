
/**
 * LocationFeatureSpecification interface 
 * @see {@link https://schema.org/LocationFeatureSpecification}
 */
import Thing from './Thing';
import PropertyValue from './PropertyValue';
import OpeningHoursSpecification from './OpeningHoursSpecification';

export default interface LocationFeatureSpecification extends Thing, PropertyValue{
  hoursAvailable?: OpeningHoursSpecification;
  validFrom?: Date | string;
  validThrough?: Date | string;
}
