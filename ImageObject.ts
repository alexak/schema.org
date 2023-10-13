
/**
 * imageObject interface 
 * @see {@link https://schema.org/imageObject}
 */

import MediaObject from "./MediaObject";
import CreativeWork from "./CreativeWork";
import PropertyValue from "./PropertyValue";

export default interface ImageObject extends MediaObject, CreativeWork {
    caption?: MediaObject | Text;
    embeddedTextCaption?: Text;
    exifData?: PropertyValue | Text;
    representativeOfPage?: boolean;
}
  