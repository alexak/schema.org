
/**
 * postalAddress interface 
 * @see {@link https://schema.org/postalAddress}
 */
import ContactPoint from "./ContactPoint";
import Thing from "./Thing";


export default interface PostalAddress extends Thing, ContactPoint {
  addressCountry?: string;
  addressLocality?: string;
  addressRegion?: string;
  postOfficeBoxNumber?: string;
  postalCode?: string;
  streetAddress?: string;
}
  