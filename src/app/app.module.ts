import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';

import { AppComponent } from './app.component';
import { FormComponent } from './steps/form/form.component';
import { SummeryComponent } from './steps/summery/summery.component';
import { UploaderComponent } from './steps/uploader/uploader.component';
import { UserTableComponent } from './steps/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    FormComponent,
    UserTableComponent,
    SummeryComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    FileUploadModule,
    HttpClientModule,
    InputNumberModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    KeyFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
