import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { join } from 'path';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
