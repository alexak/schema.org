
/**
 * MerchantReturnPolicySeasonalOverride interface 
 * @see {@link https://schema.org/MerchantReturnPolicySeasonalOverride}
 */

import Thing from './Thing';

export default interface MerchantReturnPolicySeasonalOverride extends Thing {
  startDate?: string;
  endDate?: string;
  merchantReturnDays?: string | number;
  returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow' | 'MerchantReturnUnspecified';
}
