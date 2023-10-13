
/**
 * HyperTocEntry interface 
 * @see {@link https://schema.org/HyperTocEntry}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import MediaObject from './MediaObject';


export default interface HyperTocEntry extends Thing, CreativeWork {
    associatedMedia?: MediaObject;
    tocContinuation?: HyperTocEntry;
    utterances?: string;
}
