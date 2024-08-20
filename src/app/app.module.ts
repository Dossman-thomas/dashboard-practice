import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AgGridAngular } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagePermissionsComponent } from './manage-permissions/manage-permissions.component';
import { ManageRecordsComponent } from './manage-records/manage-records.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ManagePermissionsComponent,
    ManageRecordsComponent,
    CreateRecordComponent,
    UpdateRecordComponent,
    DeleteRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridAngular,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
