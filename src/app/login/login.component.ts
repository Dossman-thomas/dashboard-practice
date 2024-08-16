import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false; // This property is correctly defined now

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Check for stored credentials in cookies and populate the fields
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) {
      this.email = storedEmail;
    }

    if (storedPassword) {
      this.password = storedPassword;
    }
  }

  onSubmit() {
    // Log the credentials before checking
    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    // console.log('Remember Me:', this.rememberMe);
  
    // console.log('Users from service:', this.userService.getUsers());

    // Check both email and password against static data
    const user = this.userService.getUsers().find(u => {
      // console.log('Checking user:', u.email, 'with password:', u.password); // Debugging line
      return u.email === this.email && u.password === this.password;
    });
  
    if (user) {
      console.log('Login successful');
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
      // console.log('Invalid credentials');
      alert('Invalid credentials');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggles the value of showPassword
  }
}
