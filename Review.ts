
/**
 * review interface 
 * @see {@link https://schema.org/review}
 */

import Thing from "./Thing";
import CreativeWork from "./CreativeWork";
import ItemList from "./ItemList";
import ListItem from "./ListItem";
import Rating from "./Rating";
import WebContent from "./WebContent";

export default interface Review extends Thing, CreativeWork {
    associatedClaimReview?: Review;
    associatedMediaReview?: Review;
    associatedReview?: Review;
    itemReviewed?: Thing;
    negativeNotes?: ItemList | ListItem | string | WebContent;
    positiveNotes?: ItemList | ListItem | string | WebContent;
    reviewAspect?: string;
    reviewBody?: string;
    reviewRating?: Rating;
}
  