import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-familydetailform', 
  templateUrl: './familydetailform.component.html',
  styleUrls: ['./familydetailform.component.css']
})
export class FamilydetailformComponent implements OnInit {

  personinfamilyFormControl=new FormControl('', [
    Validators.required,
  ]);
  fathernameFormControl =new FormControl('', [
    Validators.required,
  ]);
  mothernameFormControl=new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
  }
  public selectedLanguage !: any;
    constructor() { }

  selectedsisters='';
  selectedbrother='';
 
  public switchLanguage(lang: any) {
    this.selectedLanguage = lang; 
    console.log('Switched to ' + lang);
  }
}
  export class MyErrorStateMatcher implements ErrorStateMatcher {
    selectedLanguage: any;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }