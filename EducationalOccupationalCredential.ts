
import Thing from './Thing';
import CreativeWork from './CreativeWork';
import DefinedTerm from './DefinedTerm';
import Organization from './Organization';
import AdministrativeArea from './AdministrativeArea';

export default interface EducationalOccupationalCredential extends CreativeWork, Thing {
  competencyRequired?: DefinedTerm | string | string;
  credentialCategory?: DefinedTerm | string | string;
  educationalLevel?: DefinedTerm | string | string;
  recognizedBy?: Organization;
  validFor?: string;
  validIn?: AdministrativeArea;
}
