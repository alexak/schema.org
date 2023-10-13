
/**
 * BreadcrumbsList interface 
 * @see {@link https://schema.org/BreadcrumbsList}
 */
import ListItem from "./ListItem";
import Thing from "./Thing";

export default interface BreadcrumbList extends Thing {
  itemListElement?: ListItem | string | Thing;
  itemListOrder?: 'ItemListOrderAscending' | 'ItemListOrderDescending' | 'ItemListUnordered' | string;
  numberOfItems?: number;
}


