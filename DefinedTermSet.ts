
/**
 * DefinedTermSet interface 
 * @see {@link https://schema.org/DefinedTermSet}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import DefinedTerm from './DefinedTerm';

export default interface DefinedTermSet extends Thing, CreativeWork {
    hasDefinedTerm?: DefinedTerm;
}
