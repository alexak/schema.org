
/**
 * Country interface 
 * @see {@link https://schema.org/Country}
 */


import AggregateRating from "./AgregateRating";
import DefinedTerm from "./DefinedTerm";
import GeoCoordinates from "./GeoCoordinates";
import GeoShape from "./GeoShape";
import GeospatialGeometry from "./GeospatialGeometry";
import ImageObject from "./ImageObject";
import LocationFeatureSpecification from "./LocationFeatureSpecification";
import OpeningHoursSpecification from "./OpeningHoursSpecification";
import Photograph from "./Photograph";
import Place from "./Place";
import PostalAddress from "./PostalAddress";
import PropertyValue from "./PropertyValue";
import Review from "./Review";
import Thing from "./Thing";
import Map from "./Map";


export default interface Country extends Thing {
    additionalProperty?: PropertyValue;
    address?: PostalAddress | string;
    aggregateRating?: AggregateRating;
    amenityFeature?: LocationFeatureSpecification;
    branchCode?: string;
    containedInPlace?: Place;
    containsPlace?: Place;
    event?: Event;
    faxNumber?: string;
    geo?: GeoCoordinates | GeoShape;
    geoContains?: GeospatialGeometry | Place;
    geoCoveredBy?: GeospatialGeometry | Place;
    geoCovers?: GeospatialGeometry | Place;
    geoCrosses?: GeospatialGeometry | Place;
    geoDisjoint?: GeospatialGeometry | Place;
    geoEquals?: GeospatialGeometry | Place;
    geoIntersects?: GeospatialGeometry | Place;
    geoOverlaps?: GeospatialGeometry | Place;
    geoTouches?: GeospatialGeometry | Place;
    geoWithin?: GeospatialGeometry | Place;
    globalLocationNumber?: string;
    hasDriveThroughService?: boolean;
    hasMap?: Map | string;
    isAccessibleForFree?: boolean;
    isicV4?: string;
    keywords?: DefinedTerm | string | URL;
    latitude?: Number | string;
    logo?: ImageObject | URL | string;
    longitude?: Number | string;
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: OpeningHoursSpecification;
    photo?: ImageObject | Photograph;
    publicAccess?: boolean;
    review?: Review;
    slogan?: string;
    smokingAllowed?: boolean;
    specialOpeningHoursSpecification?: OpeningHoursSpecification;
    telephone?: string;
    tourBookingPage?: URL | string;
  }
  