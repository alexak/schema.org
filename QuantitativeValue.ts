
/**./PropertyValue
 * quantitativeValue interface 
 * @see {@link https://schema.org/quantitativeValue}
 */

import Thing from "./Thing";

export default interface QuantitativeValue extends Thing {
    additionalProperty?: string;
    maxValue?: number;
    minValue?: number;
    unitCode?: string;
    unitText?: string;
    value?: boolean | number | string;
    valueReference?: DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | string;
  }
  