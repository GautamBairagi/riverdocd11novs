import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginComponent } from './main-login/main-login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
path:'',
component:LandingPageComponent
  },
  {
    path:'landing',
    component:LandingPageComponent
      },
  {
    path: 'mainLogin',
    component: MainLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'nurse', loadChildren: () => import('./nurse/nurse.module').then(m => m.NurseModule) },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
