
/**
 * AgregateRating interface 
 * @see {@link https://schema.org/AgregateRating}
 */
import Thing from "./Thing";
import Organization from "./Organization";
import Person from "./Person";

export default interface AggregateRating extends Thing {
  itemReviewed?: Thing;
  ratingCount?: number;
  reviewCount?: number;
  author?: Organization | Person;
  bestRating?: number | string;
  ratingExplanation?: string;
  ratingValue?: number | string;
  reviewAspect?: string;
  worstRating?: number | string;
}
  