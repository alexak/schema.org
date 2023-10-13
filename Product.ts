
/**
 * product interface 
 * @see {@link https://schema.org/product}
 */
import Thing from "./Thing";
import Audience from "./Audience";
import AggregateRating from "./AgregateRating";
import Brand from "./Brand";
import Organization from "./Organization";
import Country from "./Country";
import QuantitativeValue from "./QuantitativeValue";
import ImageObject from "./ImageObject";
import PropertyValue from "./PropertyValue";
import ProductGroup from "./ProductGroup";
import ProductModel from "./ProductModel";
import Demand from "./Demand";
import Offer from "./Offer";
import Review from "./Review";
import Service from "./Service";
import ItemList from "./ItemList";
import ListItem from "./ListItem";
import Grant from "./Grant";
import EnergyConsumptionDetails from "./EnergyConsumptionDetails";
import SizeSpecification from "./SizeSpecification";
import DefinedTerm from "./DefinedTerm";

export default interface Product extends Thing {
  sku?: string;
  productID?: string;
  category?: string;
  mobileUrl?: string;
  color?: string;
  material?: Product | string;
  additionalProperty?: PropertyValue[];
  keywords?: string[];
  countryOfOrigin?: Country;
  countryOfLastProcessing?: string;
  offers?: Demand | Offer;

  isVariantOf?: ProductGroup | ProductModel;
  isRelatedTo?: Product | Service;
  isSimilarTo?: Product | Service;
  inProductGroupWithID?: string;

  review?: Review;
  negativeNotes?: ItemList | ListItem | string;
  positiveNotes?: ItemList | ListItem | string;
  aggregateRating?: AggregateRating;
  
  weight?: QuantitativeValue;
  width?: QuantitativeValue;
  height?: QuantitativeValue;
  depth?: QuantitativeValue;
  size?: string | QuantitativeValue | SizeSpecification;
  
  award?: string;
  countryOfAssembly?: string;
  brand?: Brand | Organization;
  model?: ProductModel | string;
  manufacturer?: Organization;
  funding?: Grant;
  
  mpn?: string;
  asin?: string;
  gtin?: string;
  gtin12?: string;
  gtin13?: string;
  gtin14?: string;
  gtin8?: string;
  nsn?: string;
  
  audience?: Audience;
  isFamilyFriendly?: boolean;
  hasAdultConsideration?: 'AlcoholConsideration' | 'DangerousGoodConsideration' | 'HealthcareConsideration' | 'NarcoticConsideration' | 'ReducedRelevanceForChildrenConsideration' | 'SexualContentConsideration' | 'TobaccoNicotineConsideration' | 'UnclassifiedAdultConsideration' | 'ViolenceConsideration' | 'WeaponConsideration';
  hasEnergyConsumptionDetails?: EnergyConsumptionDetails;
  hasMeasurement?: QuantitativeValue;
  hasMerchantReturnPolicy?: string;
  isAccessoryOrSparePartFor?: Product[];
  isConsumableFor?: Product[];
  itemCondition?: string;
  logo?: ImageObject | string;
  pattern?: string | DefinedTerm;
  slogan?: string;

  productionDate?: Date;
  purchaseDate?: Date;
  releaseDate?: Date;
  
}