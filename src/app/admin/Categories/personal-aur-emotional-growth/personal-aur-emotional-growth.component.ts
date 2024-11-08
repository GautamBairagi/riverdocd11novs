import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-personal-aur-emotional-growth',
  templateUrl: './personal-aur-emotional-growth.component.html',
  styleUrls: ['./personal-aur-emotional-growth.component.css']
})
export class PersonalAurEmotionalGrowthComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      currentEmotionalState:[''],
      personalGoals:[''],
      copingMechanisms:[''],
      supportSystems:[''],
      // interstInCounselingOrTheraphy:[''],
      activitiesForEmotinalGrowth:[''],
    })
  }

  addMyForm(){
    this.api.personalGrowth(this.thisForm.value).subscribe((res:any)=>{
      console.log(' personal growth form response',res)
      this.swet.SucessToast(` Personal growth added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getPersonalG();
  }

  personalGData:any[] = []
  getPersonalG(){
    this.api.personalGrowthGet().subscribe((res:any)=>{
      this.personalGData = res.data
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
