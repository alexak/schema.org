
/**
 * InteractionCounter interface 
 * @see {@link https://schema.org/InteractionCounter}
 */


import Thing from "./Thing";
import Action from "./Action";
import Place from "./Place";
import PostalAddress from "./PostalAddress";
import SoftwareApplication from "./SoftwareApplication";
import WebSite from "./Website";


export default interface InteractionCounter extends Thing {
    endTime?: string;
    interactionService?: SoftwareApplication | WebSite;
    interactionType?: Action;
    location?: Place | PostalAddress | string;
    startTime?: string;
    userInteractionCount?: number;
}
