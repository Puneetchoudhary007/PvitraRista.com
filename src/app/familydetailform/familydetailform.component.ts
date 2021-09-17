import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familydetailform',
  templateUrl: './familydetailform.component.html',
  styleUrls: ['./familydetailform.component.css']
})
export class FamilydetailformComponent implements OnInit {
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
