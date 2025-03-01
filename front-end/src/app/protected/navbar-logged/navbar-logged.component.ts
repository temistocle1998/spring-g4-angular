import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.css']
})
export class NavbarLoggedComponent {
  isSidebarOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

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
