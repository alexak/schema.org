
/**
 * MusicComposition interface 
 * @see {@link https://schema.org/MusicComposition}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import Organization from './Organization';
import Person from './Person';
import Event from './Event';
import MusicRecording from './MusicRecording';

export default interface MusicComposition extends CreativeWork, Thing {
  composer?: Organization | Person;
  firstPerformance?: Event;
  includedComposition?: MusicComposition;
  iswcCode?: string;
  lyricist?: Person;
  lyrics?: CreativeWork;
  musicArrangement?: MusicComposition;
  musicCompositionForm?: string;
  musicalKey?: string;
  recordedAs?: MusicRecording;
}
