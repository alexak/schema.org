
/**
 * Claim interface 
 * @see {@link https://schema.org/Claim}
 */

import Thing from "./Thing";
import CreativeWork from "./CreativeWork";
import Organization from "./Organization";
import Person from "./Person";


interface CreativeWorkThing extends Thing, CreativeWork {}

export default interface Claim extends CreativeWorkThing {
    appearance?: CreativeWork;
    claimInterpreter?: Organization | Person;
    firstAppearance?: CreativeWork;
}
