/**
 * Demand CreativeWork 
 * @see {@link https://schema.org/CreativeWork}
 */
import CreativeWork from "./CreativeWork";
import Thing from "./Thing";


export default interface WebContent extends CreativeWork, Thing {}