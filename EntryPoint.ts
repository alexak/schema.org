
/**
 * EntryPoint interface 
 * @see {@link https://schema.org/EntryPoint}
 */
import SoftwareApplication from "./SoftwareApplication";
import Thing from "./Thing";

export default interface EntryPoint extends Thing {
    actionApplication?: SoftwareApplication;
    actionPlatform?: 'AndroidPlatform' | 'DesktopWebPlatform' | 'GenericWebPlatform' | 'IOSPlatform' | 'MobileWebPlatform' | string | URL;
    contentType?: string;
    encodingType?: string;
    httpMethod?: string;
    urlTemplate?: string;
  }
  

