import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { UserMutationComponent } from './user-mutation.component';
import { UserFormsModule } from '../forms/user-forms.module';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { UsersService } from '@gauzy/ui-sdk/core';

@NgModule({
	imports: [
		ThemeModule,
		FormsModule,
		NbCardModule,
		UserFormsModule,
		NbButtonModule,
		NbIconModule,
		I18nTranslateModule.forChild()
	],
	exports: [UserMutationComponent],
	declarations: [UserMutationComponent],
	providers: [UsersService]
})
export class UserMutationModule {}
