
/**
 * Clip interface 
 * @see {@link https://schema.org/Clip}
 */

import Thing from "./Thing";
import CreativeWork from "./CreativeWork";
import Person from "./Person";
import HyperTocEntry from "./HyperTocEntry";
import MusicGroup from "./MusicGroup";
import Episode from "./Episode";
import CreativeWorkSeason from "./CreativeWorkSeason";
import CreativeWorkSeries from "./CreativeWorkSeries";

export default interface Clip extends Thing, CreativeWork {
  actor?: Person;
  clipNumber?: number | string;
  director?: Person;
  endOffset?: HyperTocEntry | number;
  musicBy?: MusicGroup | Person;
  partOfEpisode?: Episode;
  partOfSeason?: CreativeWorkSeason;
  partOfSeries?: CreativeWorkSeries;
  startOffset?: HyperTocEntry | number;
}
  
  