/**
 * moment-date-time.module
 */

import { NgModule } from '@angular/core';
import { MomentDateTimeAdapter, MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './moment-date-time-adapter.class';
import { MOMENT_DATE_TIME_FORMATS } from './moment-date-time-format.class';
import { DateTimeAdapter, DATE_TIME_LOCALE } from '../date-time-adapter.class';
import { DATE_TIME_FORMATS } from '../date-time-format.class';
// import { DateTimeAdapter, DATE_TIME_FORMATS, DATE_TIME_LOCALE_PROVIDER } from 'ng-pick-datetime';

@NgModule({
    providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [DATE_TIME_LOCALE, MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        },
    ],
})
export class MomentDateTimeModule {
}

@NgModule({
    imports: [MomentDateTimeModule],
    providers: [{provide: DATE_TIME_FORMATS, useValue: MOMENT_DATE_TIME_FORMATS}],
})
export class DtMomentDateTimeModule {
}
