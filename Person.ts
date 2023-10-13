
/**
 * person interface 
 * @see {@link https://schema.org/person}
 */
import Brand from "./Brand";
import ContactPoint from "./ContactPoint";
import Country from "./Country";
import CreativeWork from "./CreativeWork";
import DefinedTerm from "./DefinedTerm";
import Demand from "./Demand";
import EducationalOccupationalCredential from "./EducationalOccupationalCredential";
import EducationalOrganization from "./EducationalOrganization";
import Grant from "./Grant";
import InteractionCounter from "./InteractionCounter";
import MonetaryAmount from "./MonetaryAmount";
import Occupation from "./Occupation";
import Offer from "./Offer";
import OfferCatalog from "./OfferCatalog";
import Organization from "./Organization";
import OwnershipInfo from "./OwnershipInfo";
import Place from "./Place";
import PostalAddress from "./PostalAddress";
import PriceSpecification from "./PriceSpecification";
import Product from "./Product";
import ProgramMembership from "./ProgramMembership";
import QuantitativeValue from "./QuantitativeValue";
import Thing from "./Thing";


export default interface Person extends Thing {
    additionalName?: string;
    address?: PostalAddress | string;
    affiliation?: Organization;
    alumniOf?: EducationalOrganization | Organization;
    award?: string;
    birthDate?: string;
    birthPlace?: Place;
    brand?: Brand | Organization;
    callSign?: string;
    children?: Person;
    colleague?: Person | string;
    contactPoint?: ContactPoint;
    deathDate?: string;
    deathPlace?: Place;
    duns?: string;
    email?: string;
    familyName?: string;
    faxNumber?: string;
    follows?: Person;
    funder?: Organization | Person;
    funding?: Grant;
    gender?: 'Female' | 'Male' | string;
    givenName?: string;
    globalLocationNumber?: string;
    hasCredential?: EducationalOccupationalCredential;
    hasOccupation?: Occupation;
    hasOfferCatalog?: OfferCatalog;
    hasPOS?: Place;
    height?: string | QuantitativeValue;
    homeLocation?: ContactPoint | Place;
    honorificPrefix?: string;
    honorificSuffix?: string;
    interactionStatistic?: InteractionCounter;
    isicV4?: string;
    jobTitle?: DefinedTerm | string;
    knows?: Person;
    knowsAbout?: string | Thing ;
    knowsLanguage?: string;
    makesOffer?: Offer;
    memberOf?: Organization | ProgramMembership;
    naics?: string;
    nationality?: Country;
    netWorth?: MonetaryAmount | PriceSpecification;
    owns?: OwnershipInfo | Product;
    parent?: Person;
    performerIn?: Event;
    publishingPrinciples?: CreativeWork | string;
    relatedTo?: Person;
    seeks?: Demand;
    sibling?: Person;
    sponsor?: Organization | Person;
    spouse?: Person;
    taxID?: string;
    telephone?: string;
    vatID?: string;
    weight?: QuantitativeValue;
    workLocation?: ContactPoint | Place;
    worksFor?: Organization;
}
