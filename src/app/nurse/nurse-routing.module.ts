import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse.component';
import { MedicationMARComponent } from './shared/medication-mar/medication-mar.component';
import { MedicationPRNComponent } from './shared/medication-prn/medication-prn.component';
import { DocumentingMedicationComponent } from './shared/documenting-medication/documenting-medication.component';
import { LoggingMedicationComponent } from './shared/logging-medication/logging-medication.component';
import { NarcoticCountComponent } from './shared/narcotic-count/narcotic-count.component';
import { OrderingMedicationComponent } from './shared/ordering-medication/ordering-medication.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AddnersenotesComponent } from './shared/addnersenotes/addnersenotes.component';
import { AddmailComponent } from './shared/addmail/addmail.component';
import { FacesheetnComponent } from './pages/facesheetn/facesheetn.component';
import { MedsnComponent } from './pages/medsn/medsn.component';
import { DocsnComponent } from './pages/docsn/docsn.component';
import { NotebooksComponent } from './pages/notebooks/notebooks.component';
import { CarenComponent } from './pages/caren/caren.component';

const routes: Routes = [
  { path: '',
     component: NurseComponent,
     children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      
      {
        path:'documenting_medication',
        component:DocumentingMedicationComponent
      },
      {
        path:'logging_medication',
        component:LoggingMedicationComponent
      },
      {
        path:'narcotic_count',
        component:NarcoticCountComponent
      },
      {
        path:'ordering_medication',
        component:OrderingMedicationComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'Addnotes',
        component:AddnersenotesComponent
      },
      {
        path:'Addmail',
        component:AddmailComponent
      },
      {
        path:'view_facesheet_nurse',
        component:FacesheetnComponent
      },
    
      {
        path:'view_medsn_nurse',
        component:MedsnComponent
      },
      {
        path:'view_docsn_nurse',
        component:DocsnComponent
      },
       {
        path:'view_notebooks_nurse',
        component:NotebooksComponent
      },
      {
        path:'view_caren_nurse',
        component:CarenComponent
      }
     ]
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseRoutingModule { }
