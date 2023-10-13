
/**
 * Demand MusicRelease 
 * @see {@link https://schema.org/MusicRelease}
 */
import Thing from './Thing';
import CreativeWork from './CreativeWork';
import MusicPlaylist from './MusicPlaylist';
import Organization from './Organization';
import Person from './Person';
import MusicAlbum from './MusicAlbum';

export default interface MusicRelease extends MusicPlaylist, CreativeWork, Thing {
  catalogNumber?: string;
  creditedTo?: Organization | Person;
  duration?: string;
  musicReleaseFormat?: 'CDFormat' | 'CassetteFormat' | 'DVDFormat' | 'DigitalAudioTapeFormat' | 'DigitalFormat' | 'LaserDiscFormat' | 'VinylFormat';
  recordLabel?: Organization;
  releaseOf?: MusicAlbum;
}
 