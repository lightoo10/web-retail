import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ValidatorErrorStateMatcher } from '../util/validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRegisterForm: FormGroup;
  accountRegisterForm: FormGroup;
  countryGroup: FormGroup;
  passwordGroup: FormGroup;
  genders: any;
  countries: any;
  validatorErrorStateMatcher = new ValidatorErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {

    this.genders = this.userService.getLstGender();
    this.countries = this.userService.getLstCountry();

    this.countryGroup = this.formBuilder.group({
      country: [this.countries[0], Validators.required],
      phone: ['', Validators.required]
    });

    this.passwordGroup = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.validatePasswords });

    this.userRegisterForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: [this.genders[0], Validators.required],
      countryGroup: this.countryGroup,
      biografia: ['', Validators.maxLength(256)]
    });

    this.accountRegisterForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      passwordGroup: this.passwordGroup
    });
  }

  userRegister(user) {
    console.log(user);
  }

  accountRegister(account) {
    console.log(account);
  }

  validateGenericControl(formControl) {
    return formControl.dirty || formControl.touched;
  }

  validatePasswords(group: FormGroup) {
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;
    let validateEqual = (password === confirmPassword ? null : {passwordsNotEqual : true});
    return validateEqual;
  }

}
