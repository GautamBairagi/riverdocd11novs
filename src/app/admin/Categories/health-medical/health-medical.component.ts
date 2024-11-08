import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-health-medical',
  templateUrl: './health-medical.component.html',
  styleUrls: ['./health-medical.component.css']
})
export class HealthMedicalComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      currentMedicalConditions:[''],
      medications:[''],
      allergies:[''],
      recentHospitalizationsAndSurgeries:[''],
      primaryHealthCareProvider:[''],
      specialistReferrals:[''],
    })
  }

  addMyForm(){
    this.api.healthMedical(this.thisForm.value).subscribe((res:any)=>{
      console.log('current health form response',res)
      this.swet.SucessToast(`Health medication added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getHealthM();
  }

  healthMData:any[] = []
  getHealthM(){
    this.api.healthMedicalGet().subscribe((res:any)=>{
      this.healthMData = res.data
    })
  }

  residentData:any[] = [];
  getResident(){
    this.api.residentget().subscribe((res:any)=>{
      this.residentData = res.data;
      console.log(res)
    })
  }

}
