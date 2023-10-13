
/**
 * ItemList interface 
 * @see {@link https://schema.org/ItemList}
 */

import Thing from "./Thing";
import ListItem from "./ListItem";

export default interface ItemList extends Thing {
    itemListElement?: (ListItem | string | Thing)[];
    itemListOrder?: 'Ascending' | 'Descending' | 'Unordered' | string;
    numberOfItems?: number;
 }
  