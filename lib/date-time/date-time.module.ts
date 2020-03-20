/**
 * date-time.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { DateTimeTriggerDirective } from './date-time-picker-trigger.directive';
import { DTPICKER_SCROLL_STRATEGY_PROVIDER, DateTimeComponent } from './date-time-picker.component';
import { DateTimeContainerComponent } from './date-time-picker-container.component';
import { DateTimeInputDirective } from './date-time-picker-input.directive';
import { DateTimeIntl } from './date-time-picker-intl.service';
import { MonthViewComponent } from './calendar-month-view.component';
import { CalendarBodyComponent } from './calendar-body.component';
import { YearViewComponent } from './calendar-year-view.component';
import { MultiYearViewComponent } from './calendar-multi-year-view.component';
import { TimerBoxComponent } from './timer-box.component';
import { TimerComponent } from './timer.component';
import { NumberFixedLenPipe } from './numberedFixLen.pipe';
import { CalendarComponent } from './calendar.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
    imports: [CommonModule, OverlayModule, DialogModule, A11yModule],
    exports: [
        CalendarComponent,
        TimerComponent,
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        MultiYearViewComponent,
        YearViewComponent,
        MonthViewComponent,
    ],
    declarations: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        DateTimeContainerComponent,
        MultiYearViewComponent,
        YearViewComponent,
        MonthViewComponent,
        TimerComponent,
        TimerBoxComponent,
        CalendarComponent,
        CalendarBodyComponent,
        NumberFixedLenPipe
    ],
    providers: [
        DateTimeIntl,
        DTPICKER_SCROLL_STRATEGY_PROVIDER,
    ],
    entryComponents: [
        DateTimeContainerComponent,
    ]
})
export class DateTimeModule {
}
