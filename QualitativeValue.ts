
/**
 * qualitativeValue interface 
 * @see {@link https://schema.org/qualitativeValue}
 */

import Thing from "./Thing";


interface QualitativeValue extends Thing {
    additionalProperty?: PropertyValue;
    equal?: QualitativeValue;
    greater?: QualitativeValue;
    greaterOrEqual?: QualitativeValue;
    lesser?: QualitativeValue;
    lesserOrEqual?: QualitativeValue;
    nonEqual?: QualitativeValue;
    valueReference?: DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | string;
  }
  