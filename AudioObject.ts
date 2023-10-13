
/**
 * audioObject interface 
 * @see {@link https://schema.org/audioObject}
 */
import MediaObject from "./MediaObject";
import Thing from "./Thing";

export default interface AudioObject extends MediaObject, Thing {
    caption?: MediaObject | string;
    embeddedTextCaption?: string;
    transcript?: string;
  }
  