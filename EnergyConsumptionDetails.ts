
/**
 * EnergyConsumptionDetails interface 
 * @see {@link https://schema.org/EnergyConsumptionDetails}
 */

export default interface EnergyConsumptionDetails {
    energyEfficiencyScaleMax?: 'EUEnergyEfficiencyCategoryA' | 'EUEnergyEfficiencyCategoryA1Plus' | 'EUEnergyEfficiencyCategoryA2Plus' | 'EUEnergyEfficiencyCategoryA3Plus' | 'EUEnergyEfficiencyCategoryB' | 'EUEnergyEfficiencyCategoryC' | 'EUEnergyEfficiencyCategoryD' | 'EUEnergyEfficiencyCategoryE' | 'EUEnergyEfficiencyCategoryF' | 'EUEnergyEfficiencyCategoryG';
    energyEfficiencyScaleMin?: 'EUEnergyEfficiencyCategoryA' | 'EUEnergyEfficiencyCategoryA1Plus' | 'EUEnergyEfficiencyCategoryA2Plus' | 'EUEnergyEfficiencyCategoryA3Plus' | 'EUEnergyEfficiencyCategoryB' | 'EUEnergyEfficiencyCategoryC' | 'EUEnergyEfficiencyCategoryD' | 'EUEnergyEfficiencyCategoryE' | 'EUEnergyEfficiencyCategoryF' | 'EUEnergyEfficiencyCategoryG';
    hasEnergyEfficiencyCategory?: string;
}
  