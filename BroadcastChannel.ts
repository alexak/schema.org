import BroadcastFrequencySpecification from "./BroadcastFrequencySpecification";
import BroadcastService from "./BroadcastService";
import CableOrSatelliteService from "./CableOrSatelliteService";
import Thing from "./Thing";

/**
 * BroadcastChannel interface 
 * @see {@link https://schema.org/BroadcastChannel}
 */
export default interface BroadcastChannel extends Thing {
    broadcastChannelId?: string;
    broadcastFrequency?: string | BroadcastFrequencySpecification;
    broadcastServiceTier?: string;
    genre?: string | URL;
    inBroadcastLineup?: CableOrSatelliteService;
    providesBroadcastService?: BroadcastService;
}
