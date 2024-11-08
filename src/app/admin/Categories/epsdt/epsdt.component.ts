import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-epsdt',
  templateUrl: './epsdt.component.html',
  styleUrls: ['./epsdt.component.css']
})
export class EPSDTComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      dateOfLastEPSDTScreening:[''],
      screeningResult:[''],
      followUpRecommendations:[''],
      currentHealthAssessment:[''],
      immunizationStatus:[''],
      careCoordination:[''],
    })
  }

  addMyForm(){
    this.api.epsdtrs(this.thisForm.value).subscribe((res:any)=>{
      
      this.swet.SucessToast(`EPSDT added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getEpsd();
  }

  epsdtrData:any[] = []
  getEpsd(){
    this.api.epsdtrsGet().subscribe((res:any)=>{
      this.epsdtrData = res.data
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
