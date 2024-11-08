import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyNurseComponent } from './pages/my-nurse/my-nurse.component';

const routes: Routes = [
  { path: '',
     component: PatientComponent,
     children:[
      {
        path:'',
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'my_nurse',
        component:MyNurseComponent
      }
     ]
     }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
