
/**
 * GeoShape interface 
 * @see {@link https://schema.org/GeoShape}
 */

import PostalAddress from './PostalAddress'; 
import Thing from './Thing';
import Country from './Country';

export default interface GeoShape extends Thing {
  address?: PostalAddress | string;
  addressCountry?: Country | string;
  box?: string;
  circle?: string;
  elevation?: number | string;
  line?: string;
  polygon?: string;
  postalCode?: string;
}
