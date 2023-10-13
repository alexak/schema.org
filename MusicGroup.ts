
/**
 * MusicGroup interface 
 * @see {@link https://schema.org/MusicGroup}
 */

import Thing from './Thing';
import Organization from './Organization';
import MusicAlbum from './MusicAlbum';
import MusicRecording from './MusicRecording';
import ItemList from './ItemList';


export default interface MusicGroup extends Thing, Organization {
    album?: MusicAlbum;
    genre?: string | string;
    track?: ItemList | MusicRecording;
}
