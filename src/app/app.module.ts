import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from '../steps/uploader/uploader.component';
import { FormComponent } from '../steps/form/form.component';
import { UserTableComponent } from '../steps/user-table/user-table.component';
import { SummeryComponent } from '../steps/summery/summery.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    FormComponent,
    UserTableComponent,
    SummeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
