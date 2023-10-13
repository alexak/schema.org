
/**
 * ListItem interface 
 * @see {@link https://schema.org/ListItem}
 */

import Thing from "./Thing";

export default interface ListItem extends Thing {
    item?: Thing;
    nextItem?: ListItem;
    position?: number | string;
    previousItem?: ListItem;
}
  