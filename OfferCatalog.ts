
/**
 * Demand OfferCatalog 
 * @see {@link https://schema.org/OfferCatalog}
 */
import Thing from './Thing';
import ListItem from './ListItem';
import ItemListOrderType from './ItemListOrderType';

export default interface OfferCatalog extends Thing {
  itemListElement?: ListItem | string | Thing;
  itemListOrder?: ItemListOrderType | string;
  numberOfItems?: number;
}
