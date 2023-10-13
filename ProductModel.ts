
/**
 * productModel inter./Product
 * @see {@link https://schema.org/productModel}
 */

import Thing from "./Thing";
import Product from "./Product";
import ProductGroup from "./ProductGroup";

export default interface ProductModel extends Thing, Product {
    isVariantOf?: ProductGroup | ProductModel;
    predecessorOf?: ProductModel;
    successorOf?: ProductModel;
}
  