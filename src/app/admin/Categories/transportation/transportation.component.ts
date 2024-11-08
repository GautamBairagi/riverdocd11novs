import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      currentTransportationMethod:[''],
      frequencyTransportationUse:[''],
      TransportationBarries:[''],
      emergencyContactForTransportation:[''],
      distancetravelled:[''],
      acessibilityNeed:[''],
    })
  }

  addMyForm(){
    this.api.addTranportation(this.thisForm.value).subscribe((res:any)=>{
      
      this.swet.SucessToast(`Tranportation  added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getTranportation();
  }

  tranportationData:any[] = []
  getTranportation(){
    this.api.getTranportation().subscribe((res:any)=>{
      this.tranportationData = res.data
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
