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
    // Handle the login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  
    // Check both email and password against static data
    const user = this.userService.getUsers().find(u => u.email === this.email && u.password === this.password);
    
    if (user) {
      console.log('Login successful');
      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
  
      // Redirect to dashboard or other logic here
      // this.router.navigate(['/dashboard']); // Update this route when dashboard is implemented
    } else {
      alert('Invalid credentials');
    }
  }
  
}
