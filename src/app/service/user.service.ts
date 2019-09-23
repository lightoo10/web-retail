import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getLstGender() {
    return Constants.LST_GENDER;
  }

  getLstCountry() {
    return Constants.LST_COUNTRY;
  }
}
