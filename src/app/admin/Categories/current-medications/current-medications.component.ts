import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-current-medications',
  templateUrl: './current-medications.component.html',
  styleUrls: ['./current-medications.component.css']
})
export class CurrentMedicationsComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      medicationName:[''],
      dosage:[''],
      frequencyOfAdministration:[''],
      RouteOfAdministration:[''],
      startDate:[''],
      prescribingHealthCareProvider:[''],
    })
  }

  addMyForm(){
    this.api.currentMedication(this.thisForm.value).subscribe((res:any)=>{
      console.log('current Medication form response',res)
      this.swet.SucessToast(`Current Medication added`);
      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getCurrentMedication();
  }

  cmData:any[] = []
  getCurrentMedication(){
    this.api.currentMedicationGet().subscribe((res:any)=>{
      this.cmData = res.data
    })
  }

  residentData:any[] = [];
  getResident(){
    this.api.residentget().subscribe((res:any)=>{
      console.log(res)
      this.residentData = res.data;
    })
  }

}

