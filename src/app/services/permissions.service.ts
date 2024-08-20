import { Injectable } from '@angular/core';

export interface RolePermissions {
  role: string;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private rolesPermissions: RolePermissions[] = [
    {
      role: 'admin',
      canCreate: true,
      canRead: true,
      canUpdate: true,
      canDelete: true,
    },
    {
      role: 'data manager',
      canCreate: false,
      canRead: true,
      canUpdate: false,
      canDelete: false,
    },
    {
      role: 'employee',
      canCreate: false,
      canRead: true,
      canUpdate: false,
      canDelete: false,
    },
  ];

  constructor() {
    this.loadPermissions(); // Load permissions from localStorage on service initialization
  }

  // Retrieve all role permissions
  getPermissions(): RolePermissions[] {
    return this.rolesPermissions;
  }

  // Get permissions for a specific role
  getPermissionsForRole(role: string): RolePermissions | undefined {
    return this.rolesPermissions.find(rp => rp.role === role);
  }

  // Save permissions to localStorage
  savePermissions(): void {
    localStorage.setItem(
      'rolesPermissions',
      JSON.stringify(this.rolesPermissions)
    );
  }

  // Load permissions from localStorage
  loadPermissions(): void {
    const savedPermissions = localStorage.getItem('rolesPermissions');
    if (savedPermissions) {
      this.rolesPermissions = JSON.parse(savedPermissions);
    }
  }

  // Update permissions for a specific role
  updatePermissions(role: string, permissions: Partial<RolePermissions>): void {
    const roleIndex = this.rolesPermissions.findIndex((rp) => rp.role === role);
    if (roleIndex !== -1) {
      this.rolesPermissions[roleIndex] = {
        ...this.rolesPermissions[roleIndex],
        ...permissions,
      };
      this.savePermissions(); // Save updated permissions to localStorage
    }
  }
}
