import { Component, OnInit } from '@angular/core';
import { PermissionsService, RolePermissions } from '../services/permissions.service';

@Component({
  selector: 'app-manage-permissions',
  templateUrl: './manage-permissions.component.html',
  styleUrls: ['./manage-permissions.component.css']
})
export class ManagePermissionsComponent implements OnInit {
  rolePermissions: RolePermissions[] = [];

  constructor(private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.rolePermissions = this.permissionsService.getPermissions();
  }

  onPermissionChange(role: string): void {
    const updatedRole = this.rolePermissions.find(rp => rp.role === role);
    if (updatedRole) {
      this.permissionsService.updatePermissions(role, updatedRole);
    }
  }
}
