
/**
 * Thing interface 
 * @see {@link https://sche./PropertyValue
 */

import ImageObject from "./ImageObject";
import CreativeWork from "./CreativeWork";
import PropertyValue from "./PropertyValue";
import Action from "./Action";
import TextObject from "./TextObject";

export default interface Thing {
  identifier?: PropertyValue | string;
  name?: string;
  alternateName?: string;
  description?: string | TextObject;
  image?: ImageObject | string;
  url?: string;

  additionalType?: string;
  disambiguatingDescription?: string;
  mainEntityOfPage?: CreativeWork | string;
  potentialAction?: Action;
  sameAs?: string;
  subjectOf?: CreativeWork | Event;
}