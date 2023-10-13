/**
 * Demand ProgramMembership 
 * @see {@link https://schema.org/ProgramMembership}
 */
import Organization from './Organization';
import Person from './Person';
import QuantitativeValue from './QuantitativeValue';
import Thing from './Thing';


export default interface ProgramMembership extends Thing {
  member?: Organization | Person;
  membershipNumber?: string;
  membershipPointsEarned?: number | QuantitativeValue;
  programName?: string;
}
