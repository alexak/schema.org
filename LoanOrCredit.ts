
/**
 * LoanOrCredit interface 
 * @see {@link https://schema.org/LoanOrCredit}
 */

import Thing from './Thing';
import FinancialProduct from './FinancialProduct';
import Service from './Service';
import MonetaryAmount from './MonetaryAmount';
import RepaymentSpecification from './RepaymentSpecification';
import QuantitativeValue from './QuantitativeValue';

interface CombinedInterface extends Thing, FinancialProduct, Service {}

export default interface LoanOrCredit extends CombinedInterface {
    amount?: MonetaryAmount | number;
    currency?: string;
    gracePeriod?: string;
    loanRepaymentForm?: RepaymentSpecification;
    loanTerm?: QuantitativeValue;
    loanType?: string | string;
    recourseLoan?: boolean;
    renegotiableLoan?: boolean;
    requiredCollateral?: string | Thing;
}
