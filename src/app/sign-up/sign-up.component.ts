import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  
  selectedState='';
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contactFormControl=new FormControl('', [
    Validators.required,
  ]);
  FirstnameformControl=new FormControl('', [
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