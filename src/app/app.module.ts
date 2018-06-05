import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
/*register language package*/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FilterByCityComponent } from './components/filter-by-city/filter-by-city.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterByCityPipe } from './pipes/filter-by-city.pipe';
import { FilterByNameComponent } from './components/filter-by-name/filter-by-name.component';
import { FilterByAgeComponent } from './components/filter-by-age/filter-by-age.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FilterByCityComponent,
    FiltersComponent,
    FilterByCityPipe,
    FilterByNameComponent,
    FilterByAgeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: en_US}]
})
export class AppModule {
}
