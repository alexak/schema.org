
/**
 * OfferShippingDetails interface 
 * @see {@link https://schema.org/OfferShippingDetails}
 */

import Thing from './Thing';
import ShippingDeliveryTime from './ShippingDeliveryTime';
import QuantitativeValue from './QuantitativeValue';
import DefinedRegion from './DefinedRegion';
import MonetaryAmount from './MonetaryAmount';

export default interface OfferShippingDetails extends Thing {
    deliveryTime?: ShippingDeliveryTime;
    depth?: string | QuantitativeValue;
    doesNotShip?: boolean;
    shippingDestination?: DefinedRegion;
    shippingLabel?: string;
    shippingOrigin?: DefinedRegion;
    shippingRate?: MonetaryAmount;
    shippingSettingsLink?: string;
    transitTimeLabel?: string;
    
    weight?: QuantitativeValue;
    width?: string | QuantitativeValue;
    height?: string | QuantitativeValue;
}
