
/**
 * propertyValue interface 
 * @see {@link https://schema.org/propertyValue}
 */

import DefinedTerm from "./DefinedTerm";
import QuantitativeValue from "./QuantitativeValue";
import Thing from "./Thing";


export default interface PropertyValue extends Thing {
    minValue?: number;
    maxValue?: number;
    measurementMethod?: DefinedTerm | string;
    measurementTechnique?: DefinedTerm | string;
    propertyID?: string;
    unitCode?: string;
    unitText?: string;
    value?: boolean | number | string;
    valueReference?: DefinedTerm | /*Enumeration | MeasurementTypeEnumeration | */ PropertyValue | QualitativeValue | QuantitativeValue | string;
}
  