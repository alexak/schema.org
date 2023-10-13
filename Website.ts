
/**
 * Website interface 
 * @see {@link https://schema.org/Website}
 */


import CreativeWork from "./CreativeWork";
import Thing from "./Thing";


export default interface WebSite extends Thing, CreativeWork {
    issn: string;
}