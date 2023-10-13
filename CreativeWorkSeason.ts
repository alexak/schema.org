
/**
 * CreativeWorkSeason interface 
 * @see {@link https://schema.org/CreativeWorkSeason}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import Episode from './Episode';
import CreativeWorkSeries from './CreativeWorkSeries';
import VideoObject from './VideoObject';
import Person from './Person';
import Organization from './Organization';

export default interface CreativeWorkSeason extends Thing, CreativeWork {
    actor?: Person;
    director?: Person;
    endDate?: string;
    episode?: Episode;
    numberOfEpisodes?: number;
    partOfSeries?: CreativeWorkSeries;
    productionCompany?: Organization;
    seasonNumber?: number | string;
    startDate?: string;
    trailer?: VideoObject;
}
