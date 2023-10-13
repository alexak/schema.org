
/**
 * GeospatialGeometry interface 
 * @see {@link https://schema.org/GeospatialGeometry}
 */

import Thing from "./Thing";
import Place from "./Place";

export default interface GeospatialGeometry extends Thing {
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
}
