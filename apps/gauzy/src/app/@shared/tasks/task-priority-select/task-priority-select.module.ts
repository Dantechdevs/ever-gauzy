import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TaskPrioritiesService } from '@gauzy/ui-sdk/core';
import { TaskPrioritySelectComponent } from './task-priority-select.component';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { SharedModule } from '../../shared.module';

@NgModule({
	declarations: [TaskPrioritySelectComponent],
	exports: [TaskPrioritySelectComponent],
	imports: [
		CommonModule,
		FormsModule,
		I18nTranslateModule.forChild(),
		NgSelectModule,
		SharedModule,
		NgSelectModule,
		NgSelectModule
	],
	providers: [TaskPrioritiesService]
})
export class TaskPrioritySelectModule {}
