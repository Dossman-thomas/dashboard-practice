import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

// Import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePermissionsComponent } from './manage-permissions/manage-permissions.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { MyAccountComponent } from './my-account/my-account.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on load
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'manage-permissions', component: ManagePermissionsComponent, canActivate: [AuthGuard] },
  { path: 'create-record', component: CreateRecordComponent, canActivate: [AuthGuard] },
  { path: 'update-record', component: UpdateRecordComponent, canActivate: [AuthGuard] },
  { path: 'delete-record', component: DeleteRecordComponent, canActivate: [AuthGuard] },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
  // Add other routes here in the future
  { path: '**', redirectTo: '/login' }, // Redirect to login for all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
