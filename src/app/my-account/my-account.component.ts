import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  currentUser: User = { id: 0, name: '', email: '', password: '', role: '' };
  isEditing: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const users = this.userService.getCurrentUsers(); // Get the list of users
    const loggedInUserId = parseInt(localStorage.getItem('currentUserId') || '0', 10);
    
    this.currentUser = users.find(user => user.id === loggedInUserId) || { id: 0, name: '', email: '', password: '', role: '' };
  }

  editUser(): void {
    this.isEditing = true;
  }

  saveChanges(): void {
    this.userService.updateUser(this.currentUser).subscribe({
      next: () => {
        this.isEditing = false;
        console.log('User updated:', this.currentUser);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.loadCurrentUser(); // Reload the user to discard changes
  }
}
