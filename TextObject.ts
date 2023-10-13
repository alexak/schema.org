
/**
 * textObject interface 
 * @see {@link https://schema.org/textObject}
 */

import Thing from "./Thing";
import CreativeWork from "./CreativeWork";

export default interface TextObject extends Thing, CreativeWork {}