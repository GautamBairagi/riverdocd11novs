import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-work-career-education',
  templateUrl: './work-career-education.component.html',
  styleUrls: ['./work-career-education.component.css']
})
export class WorkCareerEducationComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      currentEmployementStatus :[''],
      occupation:[''],
      educationalBackground:[''],
      futureCareerGoal:[''],
      skillsAndQualification:[''],
      workHistory:[''],
    })
  }

  addMyForm(){
    this.api.addWorkAndCareer(this.thisForm.value).subscribe((res:any)=>{
      console.log('addWorkAndCareer form response',res)
      this.swet.SucessToast(`AddWork And Career  added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getWorkAndCareer();
  }

  workAndCareerData:any[] = []
  getWorkAndCareer(){
    this.api.getWorkAndCareer().subscribe((res:any)=>{
      this.workAndCareerData = res.data
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