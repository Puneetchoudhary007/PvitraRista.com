import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  selectedState='string';
  
  firstnameFormControl=new FormControl('', [
    Validators.required,
  ]);
  lastnameFormControl=new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contactFormControl=new FormControl('', [
    Validators.required,
  ]);
  genderformControl=new FormControl('', [
    Validators.required,
  ]);
  passwordformcontrol=new FormControl('', [
    Validators.required,
  ]);
  confirmpasswordFormControl=new FormControl('', [
    Validators.required,
  ]);
  
  AddressFormControl=new FormControl('', [
    Validators.required,
  ]);
  AddressFormControl2=new FormControl('', [
    Validators.required,
  ]);
  pincodeFormControl=new FormControl('', [
    Validators.required,
  ]);
 
  matcher = new MyErrorStateMatcher();

ngOnInit() {
}

}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}