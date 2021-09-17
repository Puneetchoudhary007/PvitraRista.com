import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import{NewformComponent} from './newform/newform.component';
import{FamilydetailformComponent} from './familydetailform/familydetailform.component';
import{OccupationformComponent} from './occupationform/occupationform.component';
import{PersonalitydetailsComponent} from './personalitydetails/personalitydetails.component';
import{DietstatusComponent} from './dietstatus/dietstatus.component';


const routes: Routes = [
  {path:'',component:LoginComponent },
  {path:'sign-up', component:SignupComponent},
  {path:'newform',component:NewformComponent},
  {path:'familydetailform',component:FamilydetailformComponent},
  {path:'occupationform',component:OccupationformComponent},
  {path:'personalitydetails',component:PersonalitydetailsComponent},
  {path:'dietstatus',component:DietstatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }