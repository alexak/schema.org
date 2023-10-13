
/**
 * MediaObject interface 
 * @see {@link https://schema.org/MediaObject}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import NewsArticle from './NewsArticle';
import QuantitativeValue from './QuantitativeValue';
import GeoShape from './GeoShape';
import Place from './Place';
import Claim from './Claim';
import Organization from './Organization';
import MediaSubscription from './MediaSubscription';

export default interface MediaObject extends CreativeWork, Thing {
  associatedArticle?: NewsArticle;
  bitrate?: string;
  contentSize?: string;
  contentUrl?: string;
  duration?: string;
  embedUrl?: string;
  encodesCreativeWork?: CreativeWork;
  encodingFormat?: string;
  endTime?: string;
  height?: string | QuantitativeValue;
  ineligibleRegion?: GeoShape | Place | string;
  interpretedAsClaim?: Claim;
  playerType?: string;
  productionCompany?: Organization;
  regionsAllowed?: Place;
  requiresSubscription?: boolean | MediaSubscription;
  sha256?: string;
  startTime?: string;
  uploadDate?: Date;
  width?: string | QuantitativeValue;
}
