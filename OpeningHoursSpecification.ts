
/**
 * OpeningHoursSpecification interface 
 * @see {@link https://schema.org/OpeningHoursSpecification}
 */
import Thing from './Thing';

export default interface OpeningHoursSpecification extends Thing{
  closes?: string;
  dayOfWeek?: 'PublicHolidays' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  opens?: string;
  validFrom?: string;
  validThrough?: string;
}


