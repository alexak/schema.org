
/**
 * Brand interface 
 * @see {@link https://schema.org/Brand}
 */
import Thing from "./Thing";
import AggregateRating from "./AgregateRating";
import ImageObject from "./ImageObject";
import Review from "./Review";


export default interface Brand extends Thing {
    aggregateRating?: AggregateRating;
    logo?: ImageObject | string;
    review?: Review;
    slogan?: string;
  }
  