
/**
 * SizeSpecification interface 
 * @see {@link https://schema.org/SizeSpecification}
 */

import Thing from './Thing';
import QualitativeValue from './QualitativeValue';
import Enumeration from './Enumeration';
import QuantitativeValue from './QuantitativeValue';
import SizeGroupEnumeration from './SizeGroupEnumeration';
import SizeSystemEnumeration from './SizeSystemEnumeration';

export default interface SizeSpecification extends Thing, QualitativeValue, Enumeration  {
    hasMeasurement?: QuantitativeValue;
    sizeGroup?: SizeGroupEnumeration | string;
    sizeSystem?: SizeSystemEnumeration | string;
    suggestedAge?: QuantitativeValue;
    suggestedGender?: 'Female' | 'Male' | string;
    suggestedMeasurement?: QuantitativeValue;
}


