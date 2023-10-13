
/**
 * MonetaryAmount interface 
 * @see {@link https://schema.org/MonetaryAmount}
 */

import Thing from './Thing';

export default interface MonetaryAmount extends Thing {
  currency?: string;
  maxValue?: number;
  minValue?: number;
  validFrom?: string;
  validThrough?: string;
  value?: boolean | number | string;
}
