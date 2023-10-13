
/**
 * MerchantReturnPolicy interface 
 * @see {@link https://schema.org/MerchantReturnPolicy}
 */

import Thing from './Thing';
import PropertyValue from './PropertyValue';
import Country from './Country';
import MonetaryAmount from './MonetaryAmount';
import MerchantReturnPolicySeasonalOverride from './MerchantReturnPolicySeasonalOverride';

export default interface MerchantReturnPolicy extends Thing {
    additionalProperty?: PropertyValue;
    applicableCountry?: Country | string;
    customerRemorseReturnFees?: 'FreeReturn' | 'OriginalShippingFees' | 'RestockingFees' | 'ReturnFeesCustomerResponsibility' | 'ReturnShippingFees';
    customerRemorseReturnLabelSource?: 'ReturnLabelCustomerResponsibility' | 'ReturnLabelDownloadAndPrint' | 'ReturnLabelInBox';
    customerRemorseReturnShippingFeesAmount?: MonetaryAmount;
    inStoreReturnsOffered?: boolean;
    itemCondition?: 'DamagedCondition' | 'NewCondition' | 'RefurbishedCondition' | 'UsedCondition';
    itemDefectReturnFees?: 'FreeReturn' | 'OriginalShippingFees' | 'RestockingFees' | 'ReturnFeesCustomerResponsibility' | 'ReturnShippingFees';
    itemDefectReturnLabelSource?: 'ReturnLabelCustomerResponsibility' | 'ReturnLabelDownloadAndPrint' | 'ReturnLabelInBox';
    itemDefectReturnShippingFeesAmount?: MonetaryAmount;
    merchantReturnDays?: string | number;
    merchantReturnLink?: string;
    refundType?: 'ExchangeRefund' | 'FullRefund' | 'StoreCreditRefund';
    restockingFee?: MonetaryAmount | number;
    returnFees?: 'FreeReturn' | 'OriginalShippingFees' | 'RestockingFees' | 'ReturnFeesCustomerResponsibility' | 'ReturnShippingFees';
    returnLabelSource?: 'ReturnLabelCustomerResponsibility' | 'ReturnLabelDownloadAndPrint' | 'ReturnLabelInBox';
    returnMethod?: 'ReturnAtKiosk' |'ReturnByMail' |'ReturnInStore';
    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow' | 'MerchantReturnUnspecified';
    returnPolicyCountry?: Country | string;
    returnPolicySeasonalOverride?: MerchantReturnPolicySeasonalOverride;
    returnShippingFeesAmount?: MonetaryAmount;
}




