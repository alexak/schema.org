
/**
 * Action interface 
 * @see {@link https://schema.org/Action}
 */
import EntryPoint from "./EntryPoint";
import Organization from "./Organization";
import Person from "./Person";
import Place from "./Place";
import PostalAddress from "./PostalAddress";
import Thing from "./Thing";


export default interface Action extends Thing {
    actionStatus?: 'ActiveActionStatus' | 'CompletedActionStatus' | 'FailedActionStatus' | 'PotentialActionStatus';
    agent?: Organization | Person;
    endTime?: string; // [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] or hh:mm:ss[Z|(+|-)hh:mm]
    error?: Thing;
    instrument?: Thing;
    location?: Place | PostalAddress | string;
    object?: Thing;
    participant?: Organization | Person;
    provider?: Organization | Person;
    result?: Thing;
    startTime?: string; // [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] or hh:mm:ss[Z|(+|-)hh:mm]
    target?: EntryPoint |string;
}
  