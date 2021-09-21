import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalitydetails',
  templateUrl: './personalitydetails.component.html',
  styleUrls: ['./personalitydetails.component.css']
})
export class PersonalitydetailsComponent implements OnInit {

  constructor() { }
  selectedFeet = '';
  selectedInch='';

  ngOnInit(): void {
  }

}