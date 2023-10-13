
/**
 * CategoryCodeSet interface 
 * @see {@link https://schema.org/CategoryCodeSet}
 */

import CreativeWork from './CreativeWork';
import Thing from './Thing';
import CategoryCode from './CategoryCode';
import DefinedTerm from './DefinedTerm';

export default interface CategoryCodeSet extends CreativeWork, Thing {
  hasCategoryCode?: CategoryCode | undefined;
  hasDefinedTerm?: DefinedTerm | undefined;
}
