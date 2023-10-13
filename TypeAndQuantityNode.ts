
/**
 * TypeAndQuantityNode interface 
 * @see {@link https://schema.org/TypeAndQuantityNode}
 */

import Thing from './Thing';
import Service from './Service';
import Product from './Product';

export default interface TypeAndQuantityNode extends Thing {
    amountOfThisGood?: number;
    businessFunction?: 'ConstructionInstallation' | 'Dispose' | 'LeaseOut' | 'Maintain' | 'ProvideService' | 'Repair' | 'Sell' | 'Buy';
    typeOfGood?: Product | Service;
    unitCode?: string | string;
    unitText?: string;
}


