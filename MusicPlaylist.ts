
/**
 * MusicPlaylist interface 
 * @see {@link https://schema.org/MusicPlaylist}
 */

import CreativeWork from './CreativeWork';
import ItemList from './ItemList';
import MusicRecording from './MusicRecording';

export default interface MusicPlaylist extends CreativeWork {
  numTracks?: number;
  track?: ItemList | MusicRecording;
}
