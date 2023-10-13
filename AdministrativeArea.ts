
/**
 * AdministrativeArea interface 
 * @see {@link https://schema.org/AdministrativeArea}
 */
import Place from "./Place";
import Thing from "./Thing";


export default interface AdministrativeArea extends Thing, Place {}