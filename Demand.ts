
/**
 * Demand interface 
 * @see {@link https://schema.org/Demand}
 */


import AdministrativeArea from "./AdministrativeArea";
import AggregateOffer from "./AggregateOffer";
import CreativeWork from "./CreativeWork";
import GeoShape from "./GeoShape";
import LoanOrCredit from "./LoanOrCredit";
import MenuItem from "./MenuItem";
import Organization from "./Organization";
import Person from "./Person";
import Place from "./Place";
import PriceSpecification from "./PriceSpecification";
import Product from "./Product";
import QuantitativeValue from "./QuantitativeValue";
import Service from "./Service";
import Thing from "./Thing";
import Trip from "./Trip";
import TypeAndQuantityNode from "./TypeAndQuantityNode";
import WarrantyPromise from "./WarrantyPromise";


export default interface Demand extends Thing {
    acceptedPaymentMethod?: LoanOrCredit | 'ByBankTransferInAdvance' |'ByInvoice' |'Cash' |'CheckInAdvance' |'COD' |'DirectDebit' |'GoogleCheckout' |'PayPal' |'PaySwarm' | 'PaymentCard';
    advanceBookingRequirement?: QuantitativeValue;
    areaServed?: AdministrativeArea | GeoShape | Place | string;
    asin?: string | URL;
    availability?: 'BackOrder' | 'Discontinued' | 'InStock' | 'InStoreOnly' | 'LimitedAvailability' | 'OnlineOnly' | 'OutOfStock' | 'PreOrder' | 'PreSale' | 'SoldOut' ;
    availabilityEnds?: string;
    availabilityStarts?: string;
    availableAtOrFrom?: Place;
    availableDeliveryMethod?: 'LockerDelivery' | 'OnSitePickup' | 'ParcelService';
    businessFunction?: 'ConstructionInstallation' | 'Dispose' | 'LeaseOut' | 'Maintain' | 'ProvideService' | 'Repair' | 'Sell' | 'Buy' ;
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
    includesObject?: TypeAndQuantityNode;
    ineligibleRegion?: GeoShape | Place | string;
    inventoryLevel?: QuantitativeValue;
    itemCondition?: 'DamagedCondition' | 'NewCondition' | 'RefurbishedCondition' | 'UsedCondition';
    itemOffered?: AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip;
    mpn?: string;
    priceSpecification?: PriceSpecification[];
    seller?: Organization | Person;
    serialNumber?: string;
    sku?: string;
    validFrom?: string;
    validThrough?: string;
    warranty?: WarrantyPromise[];
}
  


