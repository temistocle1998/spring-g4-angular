import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PageComponent } from './public/page/page.component';
import { PublishPageComponent } from './protected/publish-page/publish-page.component';
import { ProfileComponent } from './protected/profile/profile.component';
import { ForgetPasswordComponent } from './public/forget-password/forget-password.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { LayoutComponent } from './public/layout/layout.component';
import { NavbarLoggedComponent } from './protected/navbar-logged/navbar-logged.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { DiscussionComponent } from './protected/messages/discussion/discussion.component';
import { MessagesComponent } from './protected/messages/messages.component';
import { AnnouncementComponent } from './protected/announcement/announcement.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:  [
      {
        path: 'auth/login', component: LoginComponent
      },
      {
        path: 'auth/register', component: RegisterComponent
      },
      {
        path: 'forgetPassword', component: ForgetPasswordComponent
      },
      {
        path: 'resetPassword', component: ResetPasswordComponent
      },
      {
        path: '', component: PageComponent
      }
    ]
  },
  {
    path: '',
    component: NavbarLoggedComponent,
    children: [
      {
        path: 'publishAnnonce', component: PublishPageComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'messages', component: MessagesComponent
      },
      {
        path: 'anouncements', component: AnnouncementComponent
      },
      {
        path: 'messages/:id', component: DiscussionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
