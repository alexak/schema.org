
/**
 * CreativeWorkSeries interface 
 * @see {@link https://schema.org/CreativeWorkSeries}
 */

import Thing from './Thing';
import CreativeWork from './CreativeWork';

export default interface CreativeWorkSeries extends Thing, CreativeWork {
    endDate?: string;
    issn?: string;
    startDate?: string;
}
