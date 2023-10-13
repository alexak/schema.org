
/**
 * Article interface 
 * @see {@link https://schema.org/Article}
 */
import CreativeWork from "./CreativeWork";
import SpeakableSpecification from "./SpeakableSpecification";
import Thing from "./Thing";

export default interface Article extends CreativeWork, Thing {
    articleBody?: string;
    articleSection?: string;
    backstory?: CreativeWork | string;
    pageEnd?: number | string;
    pageStart?: number | string;
    pagination?: string;
    speakable?: SpeakableSpecification | string | URL;
    wordCount?: number;
  }