
/**
 * VideoObject interface 
 * @see {@link https://schema.org/VideoObject}
 */

import Thing from './Thing';
import MediaObject from './MediaObject';
import Person from './Person';
import MusicGroup from './MusicGroup';

export default interface VideoObject extends Thing, MediaObject {
    actor?: Person;
    caption?: MediaObject | string;
    director?: Person;
    embeddedTextCaption?: string;
    musicBy?: MusicGroup | Person;
    transcript?: string;
    videoFrameSize?: string;
    videoQuality?: string;
}
