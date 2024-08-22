import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent {
  newUser: User = { id: 0, name: '', email: '', password: '', role: '' };

  constructor(private userService: UserService, private router: Router) { }

  onCreateUser(): void {
    this.newUser.id = this.generateNewId();
    this.userService.createUser(this.newUser).subscribe({
      next: () => {
        console.log('User created:', this.newUser);
        // Optionally clear the form after submission
        this.newUser = { id: 0, name: '', email: '', password: '', role: '' };
        // Redirect to the dashboard after creating a user
        this.redirectToDash();
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }
  

  redirectToDash(): void {
    this.router.navigate(['/dashboard']);
  }
  

  private generateNewId(): number {
    return Math.max(...this.userService.getCurrentUsers().map(user => user.id)) + 1;
  }
}
