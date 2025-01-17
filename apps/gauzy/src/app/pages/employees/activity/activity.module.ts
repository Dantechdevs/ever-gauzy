import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityLayoutComponent } from './layout/layout.component';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { NbCardModule, NbRouteTabsetModule } from '@nebular/theme';
import { ShareModule } from '../../../share/share.module';
import { HeaderTitleModule } from '../../../@shared/components/header-title/header-title.module';

@NgModule({
	declarations: [ActivityLayoutComponent],
	imports: [
		CommonModule,
		ActivityRoutingModule,
		NbCardModule,
		I18nTranslateModule.forChild(),
		ShareModule,
		NbRouteTabsetModule,
		HeaderTitleModule
	]
})
export class ActivityModule {}
