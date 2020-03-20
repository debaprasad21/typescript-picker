import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import { NativeDateTimeAdapter } from './native-date-time-adapter.class';
import { DATE_TIME_FORMATS } from './date-time-format.class';
import { NATIVE_DATE_TIME_FORMATS } from './native-date-time-format.class';

@NgModule({
    imports: [PlatformModule],
    providers: [
        {provide: DateTimeAdapter, useClass: NativeDateTimeAdapter},
    ],
})
export class NativeDateTimeModule {
}

@NgModule({
    imports: [NativeDateTimeModule],
    providers: [{provide: DATE_TIME_FORMATS, useValue: NATIVE_DATE_TIME_FORMATS}],
})
export class DTNativeDateTimeModule {
}
