
/**
 * EducationalOrganization interface 
 * @see {@link https://schema.org/EducationalOrganization}
 */
import Thing from './Thing';
import CivicStructure from './CivicStructure';
import Place from './Place';
import Organization from './Organization';
import Person from './Person';

export default interface EducationalOrganization extends CivicStructure, Place, Organization, Thing {
  alumni?: Person;
}
