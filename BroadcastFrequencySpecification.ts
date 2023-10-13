
import Thing from './Thing';
import QuantitativeValue from './QuantitativeValue';
import QualitativeValue from './QualitativeValue';

export default interface BroadcastFrequencySpecification extends Thing {
  broadcastFrequencyValue?: number | QuantitativeValue;
  broadcastSignalModulation?: QualitativeValue | string;
  broadcastSubChannel?: string;
}
