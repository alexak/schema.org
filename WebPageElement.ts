
/**
 * WebPageElement interface
 * @see {@link https://schema.org/WebPageElement}
 */
export default interface WebPageElement extends CreativeWork, Thing {
    cssSelector?: string;
    xpath?: string;
}
