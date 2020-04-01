import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewPolicyTableComponent } from './view-policy-table/view-policy-table.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewPolicyComponent,
    AddPolicyComponent,
    ViewProfileComponent,
    DashboardComponent,
    ViewPolicyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
