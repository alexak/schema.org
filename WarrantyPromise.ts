
/**
 * WarrantyPromise interface 
 * @see {@link https://schema.org/WarrantyPromise}
 */
import Thing from './Thing';
import QuantitativeValue from './QuantitativeValue';

export default interface WarrantyPromise extends Thing {
    durationOfWarranty?: QuantitativeValue;
    warrantyScope?: string;
}
