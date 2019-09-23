import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() lstEmployee: Employee[];
  @Output() onSelected = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  viewDetail(employee : Employee){
    this.onSelected.emit(employee);
    console.log(employee);
  }

}
