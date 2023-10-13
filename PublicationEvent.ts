
/**
 * PublicationEvent interface 
 * @see {@link https://schema.org/PublicationEvent}
 */

import BroadcastService from "./BroadcastService";
import Organization from "./Organization";
import Person from "./Person";
import Thing from "./Thing";

export default interface PublicationEvent extends Thing, Event {
    publishedBy?: Organization | Person;
    publishedOn?: BroadcastService;
}
