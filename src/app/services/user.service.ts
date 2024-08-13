import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; 
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'Admin@123!', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'Manager@123!', role: 'data manager' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', password: 'Employee@123!', role: 'employee' }
  ];

  constructor() { }

  // Get all users
  getUsers(): User[] {
    return this.users;
  }

  // Get a user by ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Create a new user
  createUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  // Update an existing user
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Delete a user
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
