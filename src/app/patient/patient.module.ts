import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyNurseComponent } from './pages/my-nurse/my-nurse.component';


@NgModule({
  declarations: [
    PatientComponent,
    DashboardComponent,
    MyNurseComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
