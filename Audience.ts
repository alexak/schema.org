
/**
 * Audience interface 
 * @see {@link https://schema.org/Audience}
 */
import Thing from "./Thing";
import AdministrativeArea from "./AdministrativeArea";

export default interface Audience extends Thing {
  audienceType?: string;
  geographicArea?: AdministrativeArea;
}
  