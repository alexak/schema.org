
/**
 * organization interface 
 * @see {@link https://schema.org/organization}
 */
import AboutPage from "./AboutPage";
import AdministrativeArea from "./AdministrativeArea";
import AggregateRating from "./AgregateRating";
import Article from "./Article";
import Brand from "./Brand";
import ContactPoint from "./ContactPoint";
import CreativeWork from "./CreativeWork";
import DefinedTerm from "./DefinedTerm";
import Demand from "./Demand";
import EducationalOccupationalCredential from "./EducationalOccupationalCredential";
import GeoShape from "./GeoShape";
import Grant from "./Grant";
import ImageObject from "./ImageObject";
import InteractionCounter from "./InteractionCounter";
import MerchantReturnPolicy from "./MerchantReturnPolicy";
import Offer from "./Offer";
import OfferCatalog from "./OfferCatalog";
import OwnershipInfo from "./OwnershipInfo";
import Person from "./Person";
import Place from "./Place";
import PostalAddress from "./PostalAddress";
import Product from "./Product";
import ProgramMembership from "./ProgramMembership";
import Review from "./Review";
import Thing from "./Thing";
import QuantitativeValue from "./QuantitativeValue";

export default interface Organization {
    actionableFeedbackPolicy?: CreativeWork | string;
    address?: PostalAddress | string;
    aggregateRating?: AggregateRating;
    alumni?: Person;
    areaServed?: AdministrativeArea | GeoShape | Place | string;
    award?: string;
    brand?: Brand | Organization;
    contactPoint?: ContactPoint;
    correctionsPolicy?: CreativeWork | string;
    department?: Organization;
    dissolutionDate?: string;
    diversityPolicy?: CreativeWork | string;
    diversityStaffingReport?: Article | string;
    duns?: string;
    email?: string;
    employee?: Person;
    ethicsPolicy?: CreativeWork | string;
    event?: Event;
    faxNumber?: string;
    founder?: Person;
    foundingDate?: string;
    foundingLocation?: Place;
    funder?: Organization | Person;
    funding?: Grant;
    globalLocationNumber?: string;
    hasCredential?: EducationalOccupationalCredential;
    hasMerchantReturnPolicy?: MerchantReturnPolicy;
    hasOfferCatalog?: OfferCatalog;
    hasPOS?: Place;
    interactionStatistic?: InteractionCounter;
    isicV4?: string;
    iso6523Code?: string;
    keywords?: DefinedTerm | string;
    knowsAbout?: Thing | string;
    knowsLanguage?: string;
    legalName?: string;
    leiCode?: string;
    location?: Place | PostalAddress | string;
    logo?: ImageObject | string;
    makesOffer?: Offer;
    member?: Organization | Person;
    memberOf?: Organization | ProgramMembership;
    naics?: string;
    nonprofitStatus?: string;
    numberOfEmployees?: QuantitativeValue;
    ownershipFundingInfo?: AboutPage | CreativeWork | string;
    owns?: OwnershipInfo | Product;
    parentOrganization?: Organization;
    publishingPrinciples?: CreativeWork | string;
    review?: Review;
    seeks?: Demand;
    slogan?: string;
    sponsor?: Organization | Person;
    subOrganization?: Organization;
    taxID?: string;
    telephone?: string;
    unnamedSourcesPolicy?: CreativeWork | string;
    vatID?: string;
}