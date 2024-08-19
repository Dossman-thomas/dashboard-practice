import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false; // This property is correctly defined now

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Check for stored credentials in localStorage and populate the fields
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) {
      this.email = storedEmail;
    }

    if (storedPassword) {
      this.password = storedPassword;
    }

    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);
  }

  onSubmit() {
    // Check both email and password against static data
    const user = this.userService.getUsers().find(u => {
      return u.email === this.email && u.password === this.password;
    });
  
    if (user) {
      console.log('Login successful');

      // Set the current user using UserService
      this.userService.setCurrentUser(user);

      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
  
      alert('Login successful');
      // Redirect to dashboard or other logic here
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggles the value of showPassword
  }
}
