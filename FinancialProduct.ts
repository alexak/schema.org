
/**
 * FinancialProduct interface 
 * @see {@link https://schema.org/FinancialProduct}
 */

import Thing from "./Thing";
import QuantitativeValue from "./QuantitativeValue";
import Service from "./Service";

export default interface FinancialProduct extends Service, Thing {
  annualPercentageRate?: number | QuantitativeValue;
  feesAndCommissionsSpecification?: string | URL;
  interestRate?: number | QuantitativeValue;
}
