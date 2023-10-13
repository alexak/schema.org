
/**
 * GeoCoordinates interface 
 * @see {@link https://schema.org/GeoCoordinates}
 */
import Thing from './Thing';
import Country from './Country';
import PostalAddress from './PostalAddress';

export default interface GeoCoordinates extends Thing {
  address?: PostalAddress | string;
  addressCountry?: Country | string;
  elevation?: number | string;
  latitude?: number | string;
  longitude?: number | string;
  postalCode?: string;
}
