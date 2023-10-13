
/**
 * Demand Occupation 
 * @see {@link https://schema.org/Occupation}
 */
import Thing from './Thing';
import EducationalOccupationalCredential from './EducationalOccupationalCredential';
import MonetaryAmount from './MonetaryAmount';
import MonetaryAmountDistribution from './MonetaryAmountDistribution';
import OccupationalExperienceRequirements from './OccupationalExperienceRequirements';
import AdministrativeArea from './AdministrativeArea';
import CategoryCode from './CategoryCode';
import DefinedTerm from './DefinedTerm';

export default interface Occupation extends Thing {
  educationRequirements?: EducationalOccupationalCredential | string;
  estimatedSalary?: MonetaryAmount | MonetaryAmountDistribution | number;
  experienceRequirements?: OccupationalExperienceRequirements | string;
  occupationLocation?: AdministrativeArea;
  occupationalCategory?: CategoryCode | string;
  qualifications?: EducationalOccupationalCredential | string;
  responsibilities?: string;
  skills?: DefinedTerm | string;
}
