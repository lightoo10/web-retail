import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getLstEmployee(): any {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(Constants.LST_EMPLOYEE);
      }, 1000);
    });;
  }
}
