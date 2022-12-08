import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { LoginComponent } from "./login/login.component";
import { CheckboxModule } from 'primeng/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    HomeComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    StepsModule,
    ToastModule,
    MatStepperModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule,
    RadioButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    InputSwitchModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
