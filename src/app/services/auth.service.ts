import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';  // Update with the correct path

@Injectable({
  providedIn: 'root' // Service is available globally
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private userService: UserService, private router: Router) {
    this.checkInitialAuthState();
  }

  private checkInitialAuthState() {
    const currentUser = localStorage.getItem('currentUser');
    this.isLoggedInSubject.next(!!currentUser);
  }

  login(email: string, password: string, rememberMe: boolean) {
    this.userService.getUsers().subscribe(users => {
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }

        this.isLoggedInSubject.next(true);
        this.userService.setCurrentUser(user);
        alert('Logged in successfully');
        this.router.navigate(['/dashboard']);
      } else {
        // Handle invalid credentials
        alert('Invalid credentials');
      }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    // localStorage.removeItem('email');
    // localStorage.removeItem('password');
    // localStorage.removeItem('rememberMe');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
