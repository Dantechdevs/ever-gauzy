import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPickerComponent } from './timer-picker/timer-picker.component';
import { SharedModule } from '../shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TimerRangePickerComponent } from './timer-range-picker/timer-range-picker.component';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { NbDatepickerModule, NbIconModule } from '@nebular/theme';

@NgModule({
	declarations: [TimerPickerComponent, TimerRangePickerComponent],
	exports: [TimerPickerComponent, TimerRangePickerComponent],
	imports: [
		CommonModule,
		SharedModule,
		NgSelectModule,
		FormsModule,
		I18nTranslateModule.forChild(),
		NbDatepickerModule,
		NbIconModule
	]
})
export class TimerPickerModule {}
