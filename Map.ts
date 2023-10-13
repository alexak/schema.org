
/**
 * Map interface 
 * @see {@link https://schema.org/Map}
 */
import Thing from "./Thing";
import CreativeWork from "./CreativeWork";

export default interface Map extends Thing, CreativeWork {
    mapType: 'ParkingMap' | 'SeatingMap' | 'TransitMap' | 'VenueMap';
}


