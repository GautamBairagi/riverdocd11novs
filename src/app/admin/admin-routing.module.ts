import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminOverviewComponent } from './Dashboard/admin-overview/admin-overview.component';
import { AdminMedsComponent } from './Dashboard/admin-meds/admin-meds.component';
import { AdminCareComponent } from './Dashboard/admin-care/admin-care.component';
import { AdminNotebookComponent } from './Dashboard/admin-notebook/admin-notebook.component';
import { AdminOrderingComponent } from './Dashboard/admin-ordering/admin-ordering.component';
import { FacesheetComponent } from './Residents/facesheet/facesheet.component';
import { ResidentMedsComponent } from './Residents/resident-meds/resident-meds.component';
import { ResidentDocsComponent } from './Residents/resident-docs/resident-docs.component';
import { ResidentNotebookComponent } from './Residents/resident-notebook/resident-notebook.component';
import { ResidentCareComponent } from './Residents/resident-care/resident-care.component';
import { UsersListComponent } from './Users/users-list/users-list.component';
import { UsersGroupsComponent } from './Users/users-groups/users-groups.component';
import { DocumentsOverviewComponent } from './Documents/documents-overview/documents-overview.component';
import { DocumentsLibraryComponent } from './Documents/documents-library/documents-library.component';
import { ProfileComponent } from './Configuration/profile/profile.component';
import { ContactsComponent } from './Configuration/contacts/contacts.component';
import { ListsComponent } from './Configuration/lists/lists.component';
import { RolesComponent } from './Configuration/roles/roles.component';
import { SettingsComponent } from './Configuration/settings/settings.component';
import { AdminCommunicationComponent } from './admin-communication/admin-communication.component';
import { ResidentlistComponent } from './Residents/residentlist/residentlist.component';
import { ResidentgroupComponent } from './Residents/residentgroup/residentgroup.component';
import { SelfCareComponent } from './Categories/self-care/self-care.component';
import { CurrentProvidersComponent } from './Categories/current-providers/current-providers.component';
import { CurrentMedicationsComponent } from './Categories/current-medications/current-medications.component';
import { DentalComponent } from './Categories/dental/dental.component';
import { EPSDTComponent } from './Categories/epsdt/epsdt.component';
import { HealthMedicalComponent } from './Categories/health-medical/health-medical.component';
import { SafetyComponent } from './Categories/safety/safety.component';
import { PersonalAurEmotionalGrowthComponent } from './Categories/personal-aur-emotional-growth/personal-aur-emotional-growth.component';
import { TransportationComponent } from './Categories/transportation/transportation.component';
import { WorkCareerEducationComponent } from './Categories/work-career-education/work-career-education.component';
import { CommunityAurSocialInvolvementComponent } from './Categories/community-aur-social-involvement/community-aur-social-involvement.component';
import { CommunicationComponent } from './Categories/communication/communication.component';
import { UserprofileComponent } from './Users/userprofile/userprofile.component';
import { SeizureSymptomsComponent } from './Configuration/lists/seizure-symptoms/seizure-symptoms.component';
import { MedicationDestructionMethodsComponent } from './Configuration/lists/medication-destruction-methods/medication-destruction-methods.component';
import { ResidentNoteComponent } from './Residents/resident-note/resident-note.component';
import { ResidentReportCreateComponent } from './Residents/resident-report-create/resident-report-create.component';
import { FacesheetListComponent } from './Residents/facesheet-list/facesheet-list.component';
import { AllMedsComponent } from './Residents/all-meds/all-meds.component';


const routes: Routes = [
  { path: '',
   component: AdminComponent,
   children:[
    {
      path:'',
      redirectTo:'dashboard_overview',
      pathMatch:'full'
    },
    {
      path:'dashboard_overview',
      component:AdminOverviewComponent
    },
    {
      path:'dashboard_meds',
      component:AdminMedsComponent
    },
    {
      path:'dashboard_care',
      component:AdminCareComponent
    },
    {
      path:'dashboard_notebook',
      component:AdminNotebookComponent
    },
    {
      path:'dashboard_ordering',
      component:AdminOrderingComponent
    },
    {
      path:'resident_facesheet',
      component:FacesheetComponent
    },
    {
      path:'resident_facesheet_list',
      component:FacesheetListComponent
    },
    {
      path:'resident_meds',
      component:ResidentMedsComponent
    },
    {
      path:'all_meds',
      component:AllMedsComponent
    },
    {
      path:'resident_care',
      component:ResidentCareComponent
    },
    {
      path:'resident_notebook',
      component:ResidentNotebookComponent
    },
    {
      path:'resident_docs',
      component:ResidentDocsComponent
    },
    {
      path:'resident_note',
      component:ResidentNoteComponent
    },
    {
      path:'resident_create_report',
      component:ResidentReportCreateComponent
    },
    {
      path:'users_list',
      component:UsersListComponent
    },

    {
      path:'resident_list',
      component:ResidentlistComponent
    }, {
      path:'resident_group',
      component:ResidentgroupComponent
    },

    {
      path:'users_group',
      component:UsersGroupsComponent
    },
    {
      path:'docs_overview',
      component:DocumentsOverviewComponent
    },
    {
      path:'docs_library',
      component:DocumentsLibraryComponent
    },

    
    {
      path:'config_profile',
      component:ProfileComponent
    },
    {
      path:'config_contacts',
      component:ContactsComponent
    },
    {
      path:'config_lists',
      component:ListsComponent
    },
   

    {
      path:'config_lists_SeizureSymptoms',
      component:SeizureSymptomsComponent
    },
    {
      path:'config_lists_MedicationDestructionMethods',
      component:MedicationDestructionMethodsComponent
    },
    {
      path:'config_roles',
      component:RolesComponent
    },
    {
      path:'config_settings',
      component:SettingsComponent
    },
    {
      path:'communication',
      component:AdminCommunicationComponent
    },
    {
      path:'categories/selfcare',
      component:SelfCareComponent
    },
    {
      path:'categories/communication',
      component:CommunicationComponent
    },
    {
      path:'categories/community_social_involment',
      component:CommunityAurSocialInvolvementComponent
    },
    {
      path:'categories/work_carrier_education',
      component:WorkCareerEducationComponent
    },
    {
      path:'categories/tranportation',
      component:TransportationComponent
    },
    {
      path:'categories/personal_emotional_growth',
      component:PersonalAurEmotionalGrowthComponent
    },
    {
      path:'categories/safety',
      component:SafetyComponent
    },
    {
      path:'categories/healthMedical',
      component:HealthMedicalComponent
    },
    {
      path:'categories/epsdt',
      component:EPSDTComponent
    },
    {
      path:'categories/dental',
      component:DentalComponent
    },
    {
      path:'categories/currentMedication',
      component:CurrentMedicationsComponent
    },
    {
      path:'categories/currentProvider',
      component:CurrentProvidersComponent
    },{
      path:'user_profile',
      component:UserprofileComponent
    }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
