import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selected: Employee;
  nameSearch: any;
  employeeLst: Employee[];
  lstEmployeeSearch: Employee[];
  subscription: Subscription;
  selectedItem: boolean;
  employeeSelected: Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.subscription = this.employeeService.getLstEmployee().subscribe((employeeLst: Employee[]) => {
      this.employeeLst = employeeLst;
      this.lstEmployeeSearch = employeeLst;
    });
    this.selectedItem = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchEmployee(nameSearch: String) {
    this.nameSearch = nameSearch
    console.log(nameSearch);

    this.lstEmployeeSearch = this.employeeLst.filter(employee => employee.name.toLowerCase().includes(nameSearch.toLowerCase()));
    console.log(this.lstEmployeeSearch);
  }

  selectedEmployee(employee: Employee) {
    this.selectedItem = true;
    this.employeeSelected = employee;
    console.log(this.employeeSelected);
  }

}
