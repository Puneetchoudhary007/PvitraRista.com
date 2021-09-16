import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in.component';
import { SignupComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginComponent },
  {path:'sign-up', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }