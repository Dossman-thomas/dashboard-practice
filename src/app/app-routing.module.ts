import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePermissionsComponent } from './manage-permissions/manage-permissions.component';
import { ManageRecordsComponent } from './manage-records/manage-records.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on load
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-permissions', component: ManagePermissionsComponent },
  { path: 'manage-records', component: ManageRecordsComponent },
  // Add other routes here in the future
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
