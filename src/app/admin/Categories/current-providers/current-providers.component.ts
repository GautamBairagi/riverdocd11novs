import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-current-providers',
  templateUrl: './current-providers.component.html',
  styleUrls: ['./current-providers.component.css']
})
export class CurrentProvidersComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      providerName:[''],
      speciality:[''],
      contactInfo:[''],
      address:[''],
      dateOfVisit:[''],
      notesOnProvider:[''],
    })
  }

  addMyForm(){
    this.api.currentProvider(this.thisForm.value).subscribe((res:any)=>{
      console.log('current provider form response',res)
      this.swet.SucessToast(`Current provider added`);

    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getCurrentProvider();
  }

  cpData:any[] = []
  getCurrentProvider(){
    this.api.currentProviderGet().subscribe((res:any)=>{
      this.cpData = res.data
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
