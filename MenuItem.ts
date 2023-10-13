
/**
 * MenuItem interface 
 * @see {@link https://schema.org/MenuItem}
 */
import Thing from './Thing';
import MenuSection from './MenuSection';
import NutritionInformation from './NutritionInformation';
import Demand from './Demand';
import Offer from './Offer';


export default interface MenuItem extends Thing {
    menuAddOn?: MenuItem | MenuSection;
    nutrition?: NutritionInformation;
    offers?: Demand | Offer;
    suitableForDiet?: 'DiabeticDiet' | 'GlutenFreeDiet' | 'HalalDiet' | 'HinduDiet' | 'KosherDiet' | 'LowCalorieDiet' | 'LowFatDiet' | 'LowLactoseDiet' | 'LowSaltDiet' | 'VeganDiet' | 'VegetarianDiet' ;
}


