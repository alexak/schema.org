
import Thing from './Thing';
import Country from './Country';
import { PostalCodeRangeSpecification } from './PostalCodeRangeSpecification';


export default interface DefinedRegion extends Thing {
  addressCountry?: Country | string;
  addressRegion?: string;
  postalCode?: string;
  postalCodePrefix?: string;
  postalCodeRange?: PostalCodeRangeSpecification;
}
