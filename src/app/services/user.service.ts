import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Admin@123!',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'Manager@123!',
      role: 'data manager',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'Employee@123!',
      role: 'employee',
    },

    // Additional admins
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice@example.com',
      password: 'Admin@234!',
      role: 'admin',
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael@example.com',
      password: 'Admin@345!',
      role: 'admin',
    },

    // Additional data managers
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily@example.com',
      password: 'Manager@234!',
      role: 'data manager',
    },
    {
      id: 7,
      name: 'Daniel Garcia',
      email: 'daniel@example.com',
      password: 'Manager@345!',
      role: 'data manager',
    },
    {
      id: 8,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      password: 'Manager@456!',
      role: 'data manager',
    },
    {
      id: 9,
      name: 'David Martinez',
      email: 'david@example.com',
      password: 'Manager@567!',
      role: 'data manager',
    },
    {
      id: 10,
      name: 'Laura Anderson',
      email: 'laura@example.com',
      password: 'Manager@678!',
      role: 'data manager',
    },
    {
      id: 11,
      name: 'James Moore',
      email: 'james@example.com',
      password: 'Manager@789!',
      role: 'data manager',
    },
    {
      id: 12,
      name: 'Olivia Taylor',
      email: 'olivia@example.com',
      password: 'Manager@890!',
      role: 'data manager',
    },
    {
      id: 13,
      name: 'Robert Thomas',
      email: 'robert@example.com',
      password: 'Manager@901!',
      role: 'data manager',
    },
    {
      id: 14,
      name: 'Sophia Jackson',
      email: 'sophia@example.com',
      password: 'Manager@012!',
      role: 'data manager',
    },
    {
      id: 15,
      name: 'William White',
      email: 'william@example.com',
      password: 'Manager@1234!',
      role: 'data manager',
    },

    // Additional employees
    {
      id: 16,
      name: 'Liam Harris',
      email: 'liam@example.com',
      password: 'Employee@234!',
      role: 'employee',
    },
    {
      id: 17,
      name: 'Mia Clark',
      email: 'mia@example.com',
      password: 'Employee@345!',
      role: 'employee',
    },
    {
      id: 18,
      name: 'Noah Lewis',
      email: 'noah@example.com',
      password: 'Employee@456!',
      role: 'employee',
    },
    {
      id: 19,
      name: 'Isabella Robinson',
      email: 'isabella@example.com',
      password: 'Employee@567!',
      role: 'employee',
    },
    {
      id: 20,
      name: 'Ethan Walker',
      email: 'ethan@example.com',
      password: 'Employee@678!',
      role: 'employee',
    },
    {
      id: 21,
      name: 'Ava Young',
      email: 'ava@example.com',
      password: 'Employee@789!',
      role: 'employee',
    },
    {
      id: 22,
      name: 'James King',
      email: 'jamesk@example.com',
      password: 'Employee@890!',
      role: 'employee',
    },
    {
      id: 23,
      name: 'Charlotte Scott',
      email: 'charlotte@example.com',
      password: 'Employee@901!',
      role: 'employee',
    },
    {
      id: 24,
      name: 'Benjamin Wright',
      email: 'benjamin@example.com',
      password: 'Employee@012!',
      role: 'employee',
    },
    {
      id: 25,
      name: 'Amelia Green',
      email: 'amelia@example.com',
      password: 'Employee@1234!',
      role: 'employee',
    },
    {
      id: 26,
      name: 'Elijah Adams',
      email: 'elijah@example.com',
      password: 'Employee@2345!',
      role: 'employee',
    },
    {
      id: 27,
      name: 'Harper Baker',
      email: 'harper@example.com',
      password: 'Employee@3456!',
      role: 'employee',
    },
    {
      id: 28,
      name: 'Logan Carter',
      email: 'logan@example.com',
      password: 'Employee@4567!',
      role: 'employee',
    },
    {
      id: 29,
      name: 'Evelyn Mitchell',
      email: 'evelyn@example.com',
      password: 'Employee@5678!',
      role: 'employee',
    },
    {
      id: 30,
      name: 'Jackson Perez',
      email: 'jackson@example.com',
      password: 'Employee@6789!',
      role: 'employee',
    },
    {
      id: 31,
      name: 'Harper Nelson',
      email: 'harper@example.com',
      password: 'Employee@7890!',
      role: 'employee',
    },
    {
      id: 32,
      name: 'Mason Cooper',
      email: 'mason@example.com',
      password: 'Employee@8901!',
      role: 'employee',
    },
    {
      id: 33,
      name: 'Avery Richardson',
      email: 'avery@example.com',
      password: 'Employee@9012!',
      role: 'employee',
    },
    {
      id: 34,
      name: 'Alexander Collins',
      email: 'alexander@example.com',
      password: 'Employee@0123!',
      role: 'employee',
    },
    {
      id: 35,
      name: 'Ella Murphy',
      email: 'ella@example.com',
      password: 'Employee@12345!',
      role: 'employee',
    },
    {
      id: 36,
      name: 'Henry Ward',
      email: 'henry@example.com',
      password: 'Employee@23456!',
      role: 'employee',
    },
  ];


  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Initialize the currentUserSubject with data from localStorage if available
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.currentUserSubject.next(JSON.parse(currentUser));
    }
  }

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

  // Set the current user and update localStorage
  setCurrentUser(user: User | null): void {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(user);
  }

  // Logout and clear the user from localStorage
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
}
