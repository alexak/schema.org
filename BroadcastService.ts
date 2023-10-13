
import Thing from './Thing';
import Service from './Service';
import Organization from './Organization';
import BroadcastFrequencySpecification from './BroadcastFrequencySpecification';
import BroadcastChannel from './BroadcastChannel';

export default interface BroadcastService extends Service, Thing {
  broadcastAffiliateOf?: Organization;
  broadcastDisplayName?: string;
  broadcastFrequency?: BroadcastFrequencySpecification | string;
  broadcastTimezone?: string;
  broadcaster?: Organization;
  callSign?: string;
  hasBroadcastChannel?: BroadcastChannel;
  inLanguage?: string;
  parentService?: BroadcastService;
  videoFormat?: string;
}
