
/**
 * Demand OwnershipInfo 
 * @see {@link https://schema.org/OwnershipInfo}
 */

import Thing from './Thing';
import Organization from './Organization';
import Person from './Person';
import Product from './Product';
import Service from './Service';

export default interface OwnershipInfo extends Thing {
  acquiredFrom?: Organization | Person;
  ownedFrom?: string;
  ownedThrough?: string;
  typeOfGood?: Product | Service;
}
