import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatLineModule, MatDividerModule } from '@angular/material';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, EmployeeDetailComponent, EmployeeSearchComponent, EmployeeHeaderComponent, EmployeeListItemComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatLineModule,
    MatDividerModule
  ]
})
export class EmployeeModule { }
