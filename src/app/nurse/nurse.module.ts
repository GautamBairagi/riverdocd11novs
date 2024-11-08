import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { NurseComponent } from './nurse.component';
import { MedicationMARComponent } from './shared/medication-mar/medication-mar.component';
import { MedicationPRNComponent } from './shared/medication-prn/medication-prn.component';
import { DocumentingMedicationComponent } from './shared/documenting-medication/documenting-medication.component';
import { NarcoticCountComponent } from './shared/narcotic-count/narcotic-count.component';
import { OrderingMedicationComponent } from './shared/ordering-medication/ordering-medication.component';
import { LoggingMedicationComponent } from './shared/logging-medication/logging-medication.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AddnersenotesComponent } from './shared/addnersenotes/addnersenotes.component';
import { AddmailComponent } from './shared/addmail/addmail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacesheetnComponent } from './pages/facesheetn/facesheetn.component';
import { MedsnComponent } from './pages/medsn/medsn.component';
import { NotebooksComponent } from './pages/notebooks/notebooks.component';
import { DocsnComponent } from './pages/docsn/docsn.component';
import { CarenComponent } from './pages/caren/caren.component';


@NgModule({
  declarations: [
    NurseComponent,
    MedicationMARComponent,
    MedicationPRNComponent,
    DocumentingMedicationComponent,
    NarcoticCountComponent,
    OrderingMedicationComponent,
    LoggingMedicationComponent,
    DashboardComponent,
    AddnersenotesComponent,
    AddmailComponent,
    FacesheetnComponent,
    MedsnComponent,
    NotebooksComponent,
    DocsnComponent,
    CarenComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    ReactiveFormsModule
  ]
})
export class NurseModule { }
