
/**
 * HowTo interface
 * @see {@link https://schema.org/HowTo}
 */
export default interface HowTo extends CreativeWork, Thing {
  estimatedCost?: MonetaryAmount | string;
  performTime?: string;
  prepTime?: string;
  step?: CreativeWork | HowToSection | HowToStep | string;
  supply?: HowToSupply | string;
  tool?: HowToTool | string;
  totalTime?: string;
  yield?: QuantitativeValue | string;
}
