
/**
 * DefinedTerm interface 
 * @see {@link https://schema.org/DefinedTerm}
 */


import DefinedTermSet from "./DefinedTermSet";
import Thing from "./Thing";

export default interface DefinedTerm extends Thing {
    inDefinedTermSet?: DefinedTermSet | URL | string;
    termCode?: Text;
}
  
