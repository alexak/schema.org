
/**
 * MediaSubscription interface 
 * @see {@link https://schema.org/MediaSubscription}
 */

import Thing from './Thing';
import Organization from './Organization';
import Offer from './Offer';

export default interface MediaSubscription extends Thing {
  authenticator?: Organization;
  expectsAcceptanceOf?: Offer;
}
