import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'; // Adjust the path as needed
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  isAdmin: boolean = false;
  isDataManager: boolean = false;
  isVisible: boolean = false; // Add this property

  constructor(private router: Router, private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(user => {
      this.isAdmin = user?.role === 'admin';
      this.isDataManager = user?.role === 'data manager';
      this.isVisible = !!user; // Update visibility based on user authentication
      this.cdr.detectChanges(); // Ensure changes are detected
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  logout() {
    this.userService.logout(); // Clears the currentUser from the service
    this.router.navigate(['/login']);
    
    // Manually trigger change detection if needed
    this.cdr.detectChanges(); 
  }
}
