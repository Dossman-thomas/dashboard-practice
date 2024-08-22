import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  currentUser: User = { id: 0, name: '', email: '', password: '', role: '' };
  isEditing = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.currentUser = { ...user };
    }
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onSave(): void {
    this.userService.updateUser(this.currentUser).subscribe({
      next: () => {
        console.log('User updated:', this.currentUser);
        this.isEditing = false;
        // Update the current user in the service
        this.userService.setCurrentUser(this.currentUser);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }

  onCancel(): void {
    this.isEditing = false;
    this.loadCurrentUser(); // Revert to the original data
  }
}
