
/**
 * Trip interface 
 * @see {@link https://schema.org/Trip}
 */

import Demand from './Demand';
import ItemList from './ItemList';
import Offer from './Offer';
import Organization from './Organization';
import Person from './Person';
import Place from './Place';
import Thing from './Thing';

export default interface Trip extends Thing {
    arrivalTime?: string;
    departureTime?: string;
    itinerary?: ItemList | Place;
    offers?: Demand | Offer;
    partOfTrip?: Trip;
    provider?: Organization | Person;
    subTrip?: Trip;
    tripOrigin?: Place;
}
