import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed: boolean = false;

  // Example user roles
  isAdmin: boolean = false;
  isDataManager: boolean = false;

  constructor(private router: Router) {
    // Assume you get the current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.isAdmin = currentUser.role === 'admin';
    this.isDataManager = currentUser.role === 'data manager';
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    // Perform logout logic, clear localStorage, and navigate to the login page
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
