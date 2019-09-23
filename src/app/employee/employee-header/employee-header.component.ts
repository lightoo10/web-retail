import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  @Input() title : String;

  constructor() { }

  ngOnInit() {
  }

}
