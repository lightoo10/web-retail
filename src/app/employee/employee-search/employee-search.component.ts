import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEntering(value: string) {
    this.onSearch.emit(value);
  }

}
