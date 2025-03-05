import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './protected/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { NavbarLoggedComponent } from './protected/navbar-logged/navbar-logged.component';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './protected/messages/discussion/discussion.component';
import { MessagesComponent } from './protected/messages/messages.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { HttpTokenInterceptorService } from './shared/services/http-token-interceptor.service';
import { AnnouncementComponent } from './protected/announcement/announcement.component';

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
    MessagesComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule, 
  HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function appInitFactory(authService: AuthService): () => Promise<any> {
  return () => authService.getCurrentUser();
}
