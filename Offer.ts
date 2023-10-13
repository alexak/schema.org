
/**
 * Offer interface 
 * @see {@link https://schema.org/Offer}
 */


import AdministrativeArea from "./AdministrativeArea";
import AggregateOffer from "./AggregateOffer";
import AggregateRating from "./AgregateRating";
import CategoryCode from "./CategoryCode";
import CreativeWork from "./CreativeWork";
import GeoShape from "./GeoShape";
import LoanOrCredit from "./LoanOrCredit";
import MenuItem from "./MenuItem";
import MerchantReturnPolicy from "./MerchantReturnPolicy";
import OfferShippingDetails from "./OfferShippingDetails";
import Organization from "./Organization";
import Person from "./Person";
import Place from "./Place";
import PriceSpecification from "./PriceSpecification";
import Product from "./Product";
import QuantitativeValue from "./QuantitativeValue";
import Review from "./Review";
import Service from "./Service";
import Thing from "./Thing";
import Trip from "./Trip";
import TypeAndQuantityNode from "./TypeAndQuantityNode";
import WarrantyPromise from "./WarrantyPromise";


export default interface Offer extends Thing {
    acceptedPaymentMethod?: LoanOrCredit | 'ByBankTransferInAdvance' |'ByInvoice' |'Cash' |'CheckInAdvance' |'COD' |'DirectDebit' |'GoogleCheckout' |'PayPal' |'PaySwarm' | 'PaymentCard';
    addOn?: Offer;
    advanceBookingRequirement?: QuantitativeValue;
    aggregateRating?: AggregateRating;
    areaServed?: AdministrativeArea | GeoShape | Place | string;
    asin?: string | URL;
    availability?: 'BackOrder' | 'Discontinued' | 'InStock' | 'InStoreOnly' | 'LimitedAvailability' | 'OnlineOnly' | 'OutOfStock' | 'PreOrder' | 'PreSale' | 'SoldOut' ;
    availabilityEnds?: string;
    availabilityStarts?: string;
    availableAtOrFrom?: Place;
    availableDeliveryMethod?: 'LockerDelivery' | 'OnSitePickup' | 'ParcelService';
    businessFunction?: 'ConstructionInstallation' | 'Dispose' | 'LeaseOut' | 'Maintain' | 'ProvideService' | 'Repair' | 'Sell' | 'Buy' ;
    category?: CategoryCode | 'AerobicActivity' | 'AnaerobicActivity' | 'Balance' | 'Flexibility' | 'LeisureTimeActivity' | 'OccupationalActivity' | 'StrengthTraining' | Text | Thing | URL;
    checkoutPageURLTemplate?: string;
    deliveryLeadTime?: QuantitativeValue;
    eligibleCustomerType?: 'Business' | 'Enduser' | 'PublicInstitution' | 'Reseller' ;
    eligibleDuration?: QuantitativeValue;
    eligibleQuantity?: QuantitativeValue;
    eligibleRegion?: GeoShape | Place | string;
    eligibleTransactionVolume?: PriceSpecification;
    gtin?: string | URL;
    gtin12?: string;
    gtin13?: string;
    gtin14?: string;
    gtin8?: string;
    hasAdultConsideration?: 'AlcoholConsideration' | 'DangerousGoodConsideration' | 'HealthcareConsideration' | 'NarcoticConsideration' | 'ReducedRelevanceForChildrenConsideration' | 'SexualContentConsideration' | 'TobaccoNicotineConsideration' | 'UnclassifiedAdultConsideration' | 'ViolenceConsideration' | 'WeaponConsideration';
    hasMeasurement?: QuantitativeValue;
    hasMerchantReturnPolicy?: MerchantReturnPolicy;
    includesObject?: TypeAndQuantityNode;
    ineligibleRegion?: GeoShape | Place | string;
    inventoryLevel?: QuantitativeValue;
    isFamilyFriendly?: boolean;
    itemCondition?: 'DamagedCondition' | 'NewCondition' | 'RefurbishedCondition' | 'UsedCondition';
    itemOffered?: AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip;
    leaseLength?: string | QuantitativeValue;
    mobileUrl?: string;
    mpn?: string;
    offeredBy?: Organization | Person;
    price?: number | string;
    priceCurrency?: string;
    priceSpecification?: PriceSpecification[];
    priceValidUntil?: string;
    review?: Review;
    seller?: Organization | Person;
    serialNumber?: string;
    shippingDetails?: OfferShippingDetails;
    sku?: string;
    validFrom?: string;
    validThrough?: string;
    warranty?: WarrantyPromise[];
  }
  

  