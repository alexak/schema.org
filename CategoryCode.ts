
/**
 * CategoryCode interface 
 * @see {@link https://schema.org/CategoryCode}
 */

import Thing from './Thing';
import DefinedTerm from './DefinedTerm';
import CategoryCodeSet from './CategoryCodeSet';

export default interface CategoryCode extends Thing, DefinedTerm {
    codeValue?: string;
    inCodeSet?: CategoryCodeSet | string;
}
