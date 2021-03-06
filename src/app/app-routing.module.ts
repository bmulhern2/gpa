/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignInGuard } from './sign-in.guard'

const routes: Routes = [
  { path: "", component: BaseLayoutComponent, children: [{path:'', component: HomeComponent}], canActivate: [SignInGuard]},
  { path: 'session', component: AuthLayoutComponent, children: [{path: 'not-found', component: NotFoundComponent }]},
  { path: '**', redirectTo: 'session/not-found' },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
