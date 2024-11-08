import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      currentSafteyConcerns:[''],
      homeSafteyAssessment:[''],
      previousAccidentsOrInjuries:[''],
      emergencyContactInfo:[''],
      safteyPlanInPlace:[''],
      safteyequipmentInUse:[''],
    })
  }

  addMyForm(){
    this.api.safety(this.thisForm.value).subscribe((res:any)=>{
      this.swet.SucessToast(` Safety added`);
      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getSafety();
  }

  safetyData:any[] = []
  getSafety(){
    this.api.safetyGet().subscribe((res:any)=>{
      this.safetyData = res.data
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
