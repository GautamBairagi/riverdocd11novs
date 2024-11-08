import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,
    private swet :SweetsalertssService

  ){
    this.thisForm = this.fb.group({
      patientName:[''],
      primaryLanguage:[''],
      communicationMethod:[''],
      haeringAbility:[''],
      speechClarity:[''],
      understandingOfInstrunction:[''],
      assistiveCommunicationDevices:[''],
    })
  }

  addMyForm(){
    this.api.addCommunication(this.thisForm.value).subscribe((res:any)=>{
      console.log('communication form response',res)
      this.swet.SucessToast(`Communication added`);
      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getCommunication();
  }

  CommunicationData:any[] = []
  getCommunication(){
    this.api.getCommunication().subscribe((res:any)=>{
      this.CommunicationData = res.data
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
