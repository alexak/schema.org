
/**
 * SpeakableSpecification interface 
 * @see {@link https://schema.org/SpeakableSpecification}
 */

import Thing from './Thing';

export default interface SpeakableSpecification extends Thing {
    cssSelector?: string;
    xpath?: string;
}
