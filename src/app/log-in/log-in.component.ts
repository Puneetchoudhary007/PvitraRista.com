import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

    'username': string="";
    'password': string="";
    
  
    ngOnInit() {
    }
  
    login() : void {
      if(this.username === 'admin' && this.password === 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }
  }