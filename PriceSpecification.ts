
/**
 * PriceSpecification interface 
 * @see {@link https://schema.org/PriceSpecification}
 */

import Thing from './Thing';
import QuantitativeValue from './QuantitativeValue';

export default interface PriceSpecification extends Thing {
    eligibleQuantity?: QuantitativeValue;
    eligibleTransactionVolume?: PriceSpecification;
    maxPrice?: number;
    minPrice?: number;
    price?: number | string;
    priceCurrency?: string;
    validFrom?: string;
    validThrough?: string;
    valueAddedTaxIncluded?: boolean;
}
