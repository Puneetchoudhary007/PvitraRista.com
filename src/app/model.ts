import { SignupComponent } from "./sign-up/sign-up.component";

export class Model {
    constructor( private signupObj: SignupComponent,)
    {
       let firstname =this.signupObj.FirstnameformControl.value;
        
    }
}