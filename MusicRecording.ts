
/**
 * MusicRecording interface 
 * @see {@link https://schema.org/MusicRecording}
 */

import Thing from './Thing';
import MusicGroup from './MusicGroup';
import Person from './Person';
import MusicAlbum from './MusicAlbum';
import MusicPlaylist from './MusicPlaylist';
import MusicComposition from './MusicComposition';

export default interface MusicRecording extends Thing {
    byArtist: MusicGroup | Person;
    duration: string; // Assuming ISO 8601 date format is a string
    inAlbum: MusicAlbum;
    inPlaylist: MusicPlaylist;
    isrcCode: string;
    recordingOf: MusicComposition;
}
