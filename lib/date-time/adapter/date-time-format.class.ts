/**
 * date-time-format.class
 */

import { InjectionToken } from '@angular/core';

export type DateTimeFormats = {
    parseInput: any,
    fullPickerInput: any,
    datePickerInput: any,
    timePickerInput: any,
    monthYearLabel: any,
    dateA11yLabel: any,
    monthYearA11yLabel: any,
};

/** InjectionToken for date time picker that can be used to override default format. */
export const DATE_TIME_FORMATS = new InjectionToken<DateTimeFormats>('DATE_TIME_FORMATS');
