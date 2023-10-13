
/**
 * AlignmentObject interface 
 * @see {@link https://schema.org/AlignmentObject}
 */
import Thing from "./Thing";

export default interface AlignmentObject extends Thing {
    alignmentType?: string;
    educationalFramework?: string;
    targetDescription?: string;
    targetName?: string;
    targetUrl?: string;
}
