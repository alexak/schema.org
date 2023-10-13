
/**
 * Grant interface 
 * @see {@link https://schema.org/Grant}
 */
import CreativeWork from "./CreativeWork";
import Organization from "./Organization";
import Person from "./Person";
import Product from "./Product";
import Thing from "./Thing";


export default interface Grant extends Thing {
    fundedItem?: CreativeWork | Event | Organization | Person | Product; // | MedicalEntity | BioChemEntity
    funder?: Organization | Person;
    sponsor?: Organization | Person;
}
  