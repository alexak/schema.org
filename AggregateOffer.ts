
/**
 * AggregateOffer interface 
 * @see {@link https://schema.org/AggregateOffer}
 */
import Thing from './Thing';
import Demand from './Demand';
import Offer from './Offer';

export default interface AggregateOffer extends Thing, Offer {
    highPrice?: number | string;
    lowPrice?: number | string;
    offerCount?: number;
    offers?: Demand | Offer;
}
