
/**
 * Episode interface 
 * @see {@link https://schema.org/Episode}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import Person from './Person';
import MusicGroup from './MusicGroup';
import CreativeWorkSeason from './CreativeWorkSeason';
import CreativeWorkSeries from './CreativeWorkSeries';
import Organization from './Organization';
import VideoObject from './VideoObject';

interface CreativeWorkThing extends Thing, CreativeWork {}

export default interface Episode extends CreativeWorkThing {
    actor?: Person;
    director?: Person;
    duration?: string;
    episodeNumber?: number | string;
    musicBy?: MusicGroup | Person;
    partOfSeason?: CreativeWorkSeason;
    partOfSeries?: CreativeWorkSeries;
    productionCompany?: Organization;
    trailer?: VideoObject;
}
