
/**
 * Comment interface 
 * @see {@link https://schema.org/Comment}
 */

import CreativeWork from './CreativeWork';
import Thing from './Thing';

export default interface Comment extends Thing, CreativeWork {
    downvoteCount?: number;
    parentItem?: Comment;
    upvoteCount?: number;
}
