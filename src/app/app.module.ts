import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './log-in/log-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NewformComponent } from './newform/newform.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FamilydetailformComponent } from './familydetailform/familydetailform.component';
import { OccupationformComponent } from './occupationform/occupationform.component';
import { PersonalitydetailsComponent } from './personalitydetails/personalitydetails.component';
import { DietstatusComponent } from './dietstatus/dietstatus.component';



@NgModule({
  declarations: [
    AppComponent,LoginComponent, HeaderComponent,SignupComponent, NewformComponent, FamilydetailformComponent, OccupationformComponent, PersonalitydetailsComponent, DietstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatInputModule,FormsModule,ReactiveFormsModule,
    MatButtonModule,MatFormFieldModule,MatCardModule,MatRadioModule,MatIconModule,
    MatTableModule,MatMenuModule,MatToolbarModule,MatSelectModule,
    MatProgressSpinnerModule,MatDatepickerModule,  MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
