import { Injectable } from '@angular/core';
import { adminEndPoints } from '../Url\'s/apiUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Http/httpservices';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpService {

  constructor(public override http:HttpClient) { 
    super(http)
    this.token = localStorage.getItem('token');
  }

  mainLogin(data: any) {
    return this.post(adminEndPoints.mainLogin,data)
   }

   addpriscriberAdmin(data: any){
    return this.post(adminEndPoints.addpriscriber,data)
   }
  
  getpriscriberAdmin(){
    return this.get(adminEndPoints.getpriscriber)
   }
   addnotesNurse(data: any){
    return this.post(adminEndPoints.addnotes,data)
   }
   getnote(){
    return this.get(adminEndPoints.getnotes)
   }


   addmail(data: any){
    return this.post(adminEndPoints.addmails,data)
   }
   gemail(){
    return this.get(adminEndPoints.getmails)
   }

   getbyidmailss(id:any){
    return this.get(adminEndPoints.getbyidmail + id )
   }

 
  

  // // Admn API's 

  adminPatientAdd(data: any) {
    return this.post(adminEndPoints.adminPatientAdd,data)
  }

  adminPatientGet() {
    return this.get(adminEndPoints.adminPatientGet)
  }
  adminPatientGetById(id:any) {
    return this.get(adminEndPoints.adminPatientById + id )
  }

  adminNurseGet() {
    return this.get(adminEndPoints.adminNurseGet)
  }
  adminNurseGetById(id:any) {
    return this.get(adminEndPoints.adminNurseById + id )
  }

  adminAppointmentAdd(data:any){
    return this.post(adminEndPoints.adminAppointment,data)
  }

  adminAppointmentGet() {
    return this.get(adminEndPoints.adminAppointmentGet)
  }

  adminDischargeAdd(data:any){
    return this.post(adminEndPoints.adminDischarge,data)
  }

  adminDischargeGet() {
    return this.get(adminEndPoints.adminDischargeGet)
  }

  // activePatient(id: any, updatedData: any) {
  //   return this.patch(`https://alora2-hztfd.ondigitalocean.app/api/v1/patient/patientstatus/${id}`, updatedData);
  // }

  activeNurse(id: any, updatedData: any) {
    return this.patch(adminEndPoints.approveNurse + id, updatedData);
  }

  // activeNurse(id: any, patientstatus: any) {
  //   return this.patch(`https://alora2-hztfd.ondigitalocean.app/api/v1/prescriber/prescriberstatus/${id}`, patientstatus);
  // }





  // Useradds(data:any){
  //   return this.post(adminEndPoints.Useradd,data)
  // }


  Useradds(data: any) {
    const headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data'  // Correct content type for file upload
        // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        Authorization: `Bearer ${this.token}`,
    });
    return this.http.post(adminEndPoints.Useradd, data, { headers });
  }

  Userlistget() {
    return this.get(adminEndPoints.Userlist)
  }

  residentget() {
    return this.get(adminEndPoints.residentGet)
  }

  addResident(data:any){
    return this.post(adminEndPoints.addResident,data)
  }

  currentProviderGet() {
    return this.get(adminEndPoints.currentProviderGet)
  }

  currentProvider(data:any) {
    return this.post(adminEndPoints.currentProviderAdd,data)
  }

  currentMedicationGet() {
    return this.get(adminEndPoints.currentMedicationGet)
  }

  currentMedication(data:any) {
    return this.post(adminEndPoints.currentMedication,data)
  }

  dentalGet() {
    return this.get(adminEndPoints.dentalGet)
  }

  dental(data:any) {
    return this.post(adminEndPoints.dental,data)
  }

  epsdtrsGet() {
    return this.get(adminEndPoints.epsdtrsGet)
  }

  epsdtrs(data:any) {
    return this.post(adminEndPoints.epsdtr,data)
  }

  healthMedicalGet() {
    return this.get(adminEndPoints.healthmedicalGet)
  }

  healthMedical(data:any) {
    return this.post(adminEndPoints.healthmedical,data)
  }

  safetyGet() {
    return this.get(adminEndPoints.safteysGet)
  }

  safety(data:any) {
    return this.post(adminEndPoints.saftey,data)
  }

  personalGrowthGet() {
    return this.get(adminEndPoints.personalGrowthGet)
  }

  personalGrowth(data:any) {
    return this.post(adminEndPoints.personalGrowth,data)
  }

  getpharmacy() {
    return this.get(adminEndPoints.pharmacyget)
  }
 
  addpharmacy(data:any){
    return this.post(adminEndPoints.pharmacyadd,data)
  }

  getmedicalprofessional() {
    return this.get(adminEndPoints.medicalprofessionalget)
  }
 
  addmedicalprofessional(data:any){
    return this.post(adminEndPoints.medicalprofessionaladd,data)
  }
  
  
  getannouncement() {
    return this.get(adminEndPoints.announcementgetss)
  }
 
  addannouncements(data:any){
    return this.post(adminEndPoints.announcementaddss,data)
  }


  getappointmentsgetss() {
    return this.get(adminEndPoints.appointmentsgetss)
  }
 
  addappointmentsaddss(data:any){
    return this.post(adminEndPoints.appointmentsaddss,data)
  }
  

  getTranportation() {
    return this.get(adminEndPoints.tranportationGet)
  }
 
  addTranportation(data:any){
    return this.post(adminEndPoints.tranportation,data)
  }

  getWorkAndCareer() {
    return this.get(adminEndPoints.workAndCarrierGet)
  }
 
  addWorkAndCareer(data:any){
    return this.post(adminEndPoints.workAndCarrier,data)
  }

  getCommunicationAndSocial() {
    return this.get(adminEndPoints.communicationAndsocialGet)
  }
 
  addCommunicationAndSocial(data:any){
    return this.post(adminEndPoints.addCommunicationAndsocial,data)
  }

  getCommunication() {
    return this.get(adminEndPoints.communicationGet)
  }
 
  addCommunication(data:any){
    return this.post(adminEndPoints.addCommunication,data)
  }

  getSelfHomeCare() {
    return this.get(adminEndPoints.selfHomeCareGet)
  }
 
  addSelfHomeCare(data:any){
    return this.post(adminEndPoints.addSelfHomeCare,data)
  }

  getUserGroup(){
    return this.get(adminEndPoints.userGroupGet)
  }

  addUserGroup(data:any){
    return this.post(adminEndPoints.addUserGroup,data)
  }

  userGroupById(id:any){
    return this.get(adminEndPoints.UserGroupById + id )
   }

   updateUserGroupById(id: any, updatedData: any) {
    return this.put(`https://alora-2.vercel.app/api/v1/patient/${id}`, updatedData);
  }
  
  addmedicalpnr(data:any){
    return this.post(adminEndPoints.prnmedicationadd,data)
  }
  getmedicalpnr(){
    return this.get(adminEndPoints.prnmedicationsGet)
  }

 
}
