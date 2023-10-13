
/**
 * MusicAlbum interface 
 * @see {@link https://schema.org/MusicAlbum}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';
import MusicPlaylist from './MusicPlaylist';
import MusicRelease from './MusicRelease';
import MusicGroup from './MusicGroup';
import Person from './Person';

export default interface MusicAlbum extends MusicPlaylist, CreativeWork, Thing {
  albumProductionType?: 'CompilationAlbum' | 'DJMixAlbum' | 'DemoAlbum' | 'LiveAlbum' | 'MixtapeAlbum' | 'RemixAlbum' | 'SoundtrackAlbum' | 'SpokenWordAlbum' | 'StudioAlbum';
  albumRelease?: MusicRelease;
  albumReleaseType?: 'AlbumRelease' | 'BroadcastRelease' | 'EPRelease' | 'SingleRelease';
  byArtist?: MusicGroup | Person;
}


