
/**
 * Rating interface 
 * @see {@link https://schema.org/Rating}
 */

import Thing from './Thing';
import Organization from './Organization';
import Person from './Person';

export default interface Rating extends Thing {
    author?: Organization | Person;
    bestRating?: number | string;
    ratingExplanation?: string;
    ratingValue?: number | string;
    reviewAspect?: string;
    worstRating?: number | string;
}
