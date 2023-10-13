
/**
 * photograph interface 
 * @see {@link https://schema.org/photograph}
 */


import Thing from "./Thing";
import CreativeWork from "./CreativeWork";

export default interface Photograph extends Thing, CreativeWork {}