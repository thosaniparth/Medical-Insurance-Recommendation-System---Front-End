import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewPolicyTableComponent } from './view-policy-table/view-policy-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', component: ViewPolicyTableComponent},
      {path: 'viewPolicy', component: ViewPolicyComponent},
      {path: 'viewPolicyTable', component: ViewPolicyTableComponent},
      {path: 'addPolicy' , component: AddPolicyComponent},
      {path: 'viewProfile', component: ViewProfileComponent},
      

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
