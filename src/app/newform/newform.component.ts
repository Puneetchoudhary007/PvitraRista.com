import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})


export class NewformComponent implements OnInit {
  ngOnInit(): void {
  }
  public selectedLanguage !: any;
  
  constructor() { }
  selectedManglik='';
  selectetMaritalstatus='';
  selectetfood='';
  selectedReligion='';
  selectedCaste='';

  public switchLanguage(lang: any) {
    this.selectedLanguage = lang;
    console.log('Switched to ' + lang);
  }
}