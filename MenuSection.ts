
/**
 * MenuSection interface 
 * @see {@link https://schema.org/MenuSection}
 */
import Thing from './Thing';
import CreativeWork from './CreativeWork';
import MenuItem from './MenuItem';

export default interface MenuSection extends CreativeWork, Thing {
  hasMenuItem?: MenuItem;
  hasMenuSection?: MenuSection;
}
