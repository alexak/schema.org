
/**
 * productGroup inter./Product
 * @see {@link https://schema.org/productGroup}
 */

import Thing from "./Thing";
import Product from "./Product";
import DefinedTerm from "./DefinedTerm";

export default interface ProductGroup extends Thing, Product {
    hasVariant?: Product;
    productGroupID?: Text;
    variesBy?: DefinedTerm | Text;
}
  