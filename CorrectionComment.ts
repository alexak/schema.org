
/**
 * CorrectionComment interface 
 * @see {@link https://schema.org/CorrectionComment}
 */
import Thing from './Thing';
import CreativeWork from './CreativeWork';
import Comment from './Comment';

export default interface CorrectionComment extends Thing, CreativeWork {
    downvoteCount?: number;
    parentItem?: Comment;
    upvoteCount?: number;
}
