import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent {
  currentUser: User | null = null;
  isEditing = false;
  isChangingPassword = false;
  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';
  passwordError = '';

  constructor(private userService: UserService) {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onCancelEdit(): void {
    this.isEditing = false;
    this.loadCurrentUser(); // Reset changes
  }

  onSubmit(): void {
    if (this.currentUser) {
      this.userService.updateUser(this.currentUser).subscribe({
        next: (updatedUser) => {
          console.log('User updated:', updatedUser);
          alert('Your profile was updated successfully.');
          this.isEditing = false;
        },
        error: (error) => {
          console.error('Error updating user:', error);
        },
      });
    }
  }

  onChangePassword(): void {
    this.isChangingPassword = true;
  }

  onCancelPasswordChange(): void {
    this.isChangingPassword = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.passwordError = '';
  }

  onSubmitNewPassword(): void {
    if (!this.currentUser) return;

    // Validate current password
    if (this.currentUser.password !== this.currentPassword) {
      this.passwordError = 'Current password is incorrect.';
      return;
    }

    // Validate new password match
    if (this.newPassword !== this.confirmNewPassword) {
      this.passwordError = 'New passwords do not match.';
      return;
    }

    // Update password
    this.currentUser.password = this.newPassword;
    this.userService.updateUser(this.currentUser).subscribe({
      next: () => {
        console.log('Password updated successfully.');
        this.onCancelPasswordChange();
      },
      error: (error) => {
        console.error('Error updating password:', error);
        this.passwordError = 'Failed to update password.';
      },
    });
  }
}
