
/**
 * NewsArticle interface 
 * @see {@link https://schema.org/NewsArticle}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import Article from './Article';

export default interface NewsArticle extends Article, CreativeWork, Thing {
  dateline?: string;
  printColumn?: string;
  printEdition?: string;
  printPage?: string;
  printSection?: string;
}
