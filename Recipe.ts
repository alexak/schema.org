/**
 * Demand Recipe 
 * @see {@link https://schema.org/Recipe}
 */
import HowTo from './HowTo'
import NutritionInformation from './NutritionInformation'
import CreativeWork from './CreativeWork'
import QuantitativeValue from './QuantitativeValue'

export default interface Recipe extends HowTo, CreativeWork {
    cookTime?: string,
    cookingMethod?: string,
    nutrition?: NutritionInformation,
    recipeCategory?: string,
    recipeCuisine?: string,
    recipeIngredient?: string,
    recipeInstructions?: CreativeWork | ItemList | string,
    recipeYield?: QuantitativeValue | string,
    suitableForDiet?: 'DiabeticDiet' | 'GlutenFreeDiet' | 'HalalDiet' | 'HinduDiet' | 'KosherDiet' | 'LowCalorieDiet' | 'LowFatDiet' | 'LowLactoseDiet' | 'LowSaltDiet' | 'VeganDiet' | 'VegetarianDiet'
}


