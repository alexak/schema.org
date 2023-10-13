/**
 * ShippingDeliveryTime interface 
 * @see {@link https://schema.org/ShippingDeliveryTime}
 */
import Thing from './Thing';
import OpeningHoursSpecification from './OpeningHoursSpecification';
import QuantitativeValue from './QuantitativeValue';

export default interface ShippingDeliveryTime extends Thing {
  businessDays?: OpeningHoursSpecification;
  cutoffTime?: string;
  handlingTime?: QuantitativeValue;
  transitTime?: QuantitativeValue;
}
