
/**
 * NutritionInformation interface 
 * @see {@link https://schema.org/NutritionInformation}
 */

import Thing from './Thing';

export default interface NutritionInformation extends Thing {
  calories?: string;
  carbohydrateContent?: string;
  cholesterolContent?: string;
  fatContent?: string;
  fiberContent?: string;
  proteinContent?: string;
  saturatedFatContent?: string;
  servingSize?: string;
  sodiumContent?: string;
  sugarContent?: string;
  transFatContent?: string;
  unsaturatedFatContent?: string;
}
