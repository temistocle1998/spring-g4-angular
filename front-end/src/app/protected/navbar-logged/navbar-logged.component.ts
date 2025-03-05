import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PromiseError } from 'src/app/shared/classes/promise-error';
import { User } from 'src/app/shared/classes/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.css']
})
export class NavbarLoggedComponent implements OnInit, OnDestroy {
  errors:any
  currentUser: User;
  subscriptions: Subscription[] = []
  isSidebarOpen = false;

  constructor(private authSrv:AuthService,public router: Router,
    private cdr: ChangeDetectorRef){ 
    this.currentUser = Object.create(null);
  }

  ngOnInit(): void {
    const subscription = this.authSrv.currentUserProvider
      .subscribe((user: User) => this.currentUser = user)
    if (!this.subscriptions.includes(subscription)) {
      this.subscriptions.push(subscription)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  logout() {
      this.authSrv.removeAllConnexionData()
      this.router.navigate(['/auth/login'])
  }

  toggleSidebar(event: Event) {
    event.stopPropagation(); // Prevent the click from reaching the parent div
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar toggled:', this.isSidebarOpen); // Debugging
    this.cdr.detectChanges(); // Force update
  }

  closeSidebar(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sidebar') && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }
}
