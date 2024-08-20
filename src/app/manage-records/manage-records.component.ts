import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-records',
  templateUrl: './manage-records.component.html',
  styleUrls: ['./manage-records.component.css']
})
export class ManageRecordsComponent {
  // private gridApi!: GridApi;

  // paginationPageSizeSelector = [10, 25, 50, 100];
  // paginationPageSize = 10;
  // pagination = true;

  // defaultColDef: ColDef = {
  //   flex: 1,
  //   filter: true,
  //   sortable: true,
  // }

  // public columnDefs: ColDef[] = [
  //   { field: 'id', headerName: 'ID' },
  //   { field: 'name', headerName: 'Name' },
  //   { field: 'email', headerName: 'Email' },
  //   { field: 'role', headerName: 'Role' }
  // ];

  // public rowData: any[] = [];

  // constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.rowData = this.userService.getUsers(); // Fetch user data from the service
  // }

  // onGridReady(params: GridReadyEvent): void {
  //   this.gridApi = params.api;
  //   this.gridApi.sizeColumnsToFit(); // Adjust columns to fit the grid
  // }
}
