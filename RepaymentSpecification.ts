
/**
 * RepaymentSpecification interface 
 * @see {@link https://schema.org/RepaymentSpecification}
 */

import Thing from './Thing';
import MonetaryAmount from './MonetaryAmount';

export default interface RepaymentSpecification extends Thing {
  downPayment?: MonetaryAmount | number;
  earlyPrepaymentPenalty?: MonetaryAmount;
  loanPaymentAmount?: MonetaryAmount;
  loanPaymentFrequency?: number;
  numberOfLoanPayments?: number;
}
