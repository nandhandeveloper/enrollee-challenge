import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { EnrolleeComponent } from './enrollees-list/enrollee/enrollee.component';
import { EnrolleeDialogComponent } from './enrollees-list/enrollee-dialog/enrollee-dialog.component';
import { EnrolleePipe } from './enrollees-list/enrollee.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleesListComponent,
    EnrolleeComponent,
    EnrolleeDialogComponent,
    EnrolleePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
