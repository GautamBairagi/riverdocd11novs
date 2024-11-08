import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-self-care',
  templateUrl: './self-care.component.html',
  styleUrls: ['./self-care.component.css']
})
export class SelfCareComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      dailyRoutine:[''],
      personalHygiene:[''],
      mobility:[''],
      medicationManagement:[''],
      dietAndNutrition:[''],
      assistiveDevices:[''],
      homeSafteyConcern:[''],
      houseHoldChores:[''],
      emergencyContact:[''],
      additionalNotes:[''],
    })
  }

  addMyForm(){
    this.api.addSelfHomeCare(this.thisForm.value).subscribe((res:any)=>{
      console.log('Self Home Care form response',res)
      this.swet.SucessToast(`Self Home Care  added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getSelfHomeCare();
  }

  salfHomeCareData:any[] = []
  getSelfHomeCare(){
    this.api.getSelfHomeCare().subscribe((res:any)=>{
      this.salfHomeCareData = res.data
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
