import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { CountryService } from '@gauzy/ui-sdk/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CountryComponent } from './country.component';

@NgModule({
	declarations: [CountryComponent],
	imports: [ThemeModule, FormsModule, ReactiveFormsModule, NgSelectModule, I18nTranslateModule.forChild()],
	providers: [CountryService],
	exports: [CountryComponent]
})
export class CountryModule {}
