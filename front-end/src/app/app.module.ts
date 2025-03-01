import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './public/layout/layout.component';
import { PageComponent } from './public/page/page.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { PublishPageComponent } from './protected/publish-page/publish-page.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { ProfileComponent } from './protected/profile/profile.component';
import { ForgetPasswordComponent } from './public/forget-password/forget-password.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './protected/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { NavbarLoggedComponent } from './protected/navbar-logged/navbar-logged.component';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './protected/messages/discussion/discussion.component';
import { MessagesComponent } from './protected/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageComponent,
    NavbarComponent,
    PublishPageComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardAdminComponent,
    DashboardComponent,
    NavbarLoggedComponent,
    DiscussionComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule, 
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
