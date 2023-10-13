
/**
 * SoftwareApplication interface 
 * @see {@link https://schema.org/SoftwareApplication}
 */
/**
 * Demand SoftwareApplication 
 * @see {@link https://schema.org/SoftwareApplication}
 */
import CreativeWork from './CreativeWork';
import Thing from './Thing';
import ImageObject from './ImageObject';
import DataFeed from './DataFeed';

export default interface SoftwareApplication extends Thing, CreativeWork {
    applicationCategory?: string;
    applicationSubCategory?: string;
    applicationSuite?: string;
    availableOnDevice?: string;
    countriesNotSupported?: string;
    countriesSupported?: string;
    downloadUrl?: string;
    featureList?: string;
    fileSize?: string;
    installUrl?: string;
    memoryRequirements?: string;
    operatingSystem?: string;
    permissions?: string;
    processorRequirements?: string;
    releaseNotes?: string;
    screenshot?: ImageObject | string;
    softwareAddOn?: SoftwareApplication;
    softwareHelp?: CreativeWork;
    softwareRequirements?: string;
    softwareVersion?: string;
    storageRequirements?: string;
    supportingData?: DataFeed;
}
