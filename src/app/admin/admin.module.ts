import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddPatientComponent } from './shared/add-patient/add-patient.component';
import { AddAppointmentComponent } from './shared/add-appointment/add-appointment.component';
import { DischargeComponent } from './shared/discharge/discharge.component';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AddprescriberComponent } from './shared/addprescriber/addprescriber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPatientComponent } from './pages/view-patient/view-patient.component';
import { SetupPatientComponent } from './pages/setup-patient/setup-patient.component';
import { SetupNurseComponent } from './pages/setup-nurse/setup-nurse.component';
import { ViewAppointmentComponent } from './pages/view-appointment/view-appointment.component';
import { ViewDischargeComponent } from './pages/view-discharge/view-discharge.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { OverviewAComponent } from './pages/overview-a/overview-a.component';
import { MedsAComponent } from './pages/meds-a/meds-a.component';
import { CareAComponent } from './pages/care-a/care-a.component';
import { NotebookAComponent } from './pages/notebook-a/notebook-a.component';
import { AdminOverviewComponent } from './Dashboard/admin-overview/admin-overview.component';
import { AdminMedsComponent } from './Dashboard/admin-meds/admin-meds.component';
import { AdminCareComponent } from './Dashboard/admin-care/admin-care.component';
import { AdminNotebookComponent } from './Dashboard/admin-notebook/admin-notebook.component';
import { AdminOrderingComponent } from './Dashboard/admin-ordering/admin-ordering.component';
import { FacesheetComponent } from './Residents/facesheet/facesheet.component';
import { ResidentMedsComponent } from './Residents/resident-meds/resident-meds.component';
import { ResidentCareComponent } from './Residents/resident-care/resident-care.component';
import { ResidentNotebookComponent } from './Residents/resident-notebook/resident-notebook.component';
import { ResidentDocsComponent } from './Residents/resident-docs/resident-docs.component';
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
import { CommunicationComponent } from './Categories/communication/communication.component';
import { CommunityAurSocialInvolvementComponent } from './Categories/community-aur-social-involvement/community-aur-social-involvement.component';
import { WorkCareerEducationComponent } from './Categories/work-career-education/work-career-education.component';
import { TransportationComponent } from './Categories/transportation/transportation.component';
import { PersonalAurEmotionalGrowthComponent } from './Categories/personal-aur-emotional-growth/personal-aur-emotional-growth.component';
import { SafetyComponent } from './Categories/safety/safety.component';
import { HealthMedicalComponent } from './Categories/health-medical/health-medical.component';
import { EPSDTComponent } from './Categories/epsdt/epsdt.component';
import { DentalComponent } from './Categories/dental/dental.component';
import { CurrentMedicationsComponent } from './Categories/current-medications/current-medications.component';
import { CurrentProvidersComponent } from './Categories/current-providers/current-providers.component';
import { UserprofileComponent } from './Users/userprofile/userprofile.component';
import { SeizureSymptomsComponent } from './Configuration/lists/seizure-symptoms/seizure-symptoms.component';
import { MedicationDestructionMethodsComponent } from './Configuration/lists/medication-destruction-methods/medication-destruction-methods.component';
import { ResidentNoteComponent } from './Residents/resident-note/resident-note.component';
import { ResidentReportCreateComponent } from './Residents/resident-report-create/resident-report-create.component';
import { FacesheetListComponent } from './Residents/facesheet-list/facesheet-list.component';
import { AllMedsComponent } from './Residents/all-meds/all-meds.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddPatientComponent,
    AddAppointmentComponent,
    DischargeComponent,
    HomeComponent,
    DashboardComponent,
    AddprescriberComponent,
    ViewPatientComponent,
    SetupPatientComponent,
    SetupNurseComponent,
    ViewAppointmentComponent,
    ViewDischargeComponent,
    OrderingComponent,
    OverviewAComponent,
    MedsAComponent,
    CareAComponent,
    NotebookAComponent,
    AdminOverviewComponent,
    AdminMedsComponent,
    AdminCareComponent,
    AdminNotebookComponent,
    AdminOrderingComponent,
    FacesheetComponent,
    ResidentMedsComponent,
    ResidentCareComponent,
    ResidentNotebookComponent,
    ResidentDocsComponent,
    UsersListComponent,
    UsersGroupsComponent,
    DocumentsOverviewComponent,
    DocumentsLibraryComponent,
    ProfileComponent,
    ContactsComponent,
    ListsComponent,
    RolesComponent,
    SettingsComponent,
    AdminCommunicationComponent,
    ResidentlistComponent,
    ResidentgroupComponent,
    SelfCareComponent,
    CommunicationComponent,
    CommunityAurSocialInvolvementComponent,
    WorkCareerEducationComponent,
    TransportationComponent,
    PersonalAurEmotionalGrowthComponent,
    SafetyComponent,
    HealthMedicalComponent,
    EPSDTComponent,
    DentalComponent,
    CurrentMedicationsComponent,
    CurrentProvidersComponent,
    UserprofileComponent,
    SeizureSymptomsComponent,
    MedicationDestructionMethodsComponent,
    ResidentNoteComponent,
    ResidentReportCreateComponent,
    FacesheetListComponent,
    AllMedsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
