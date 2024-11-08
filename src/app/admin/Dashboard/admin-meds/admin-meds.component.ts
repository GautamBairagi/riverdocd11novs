import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-admin-meds',
  templateUrl: './admin-meds.component.html',
  styleUrls: ['./admin-meds.component.css']
})
export class AdminMedsComponent implements OnInit {
 


  constructor(
    private route:Router,
    private service :ApiService,
    private fb:FormBuilder,
    private swet :SweetsalertssService
  ){}
  
  myForm!: FormGroup;
  ck :boolean=false;

  getgetappointmentsgets:any=[];
 

  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.myForm = this.fb.group({
      resident:['',],       
  prnMedication :['',], 
  giveDate   :['',],    
  reason   :['',],      
  giveTime  :['',],     
  givenBy  :['',], 
    })
   
  }




  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm.value);
      this.service.addmedicalpnr(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          this.swet.SucessToast(`Add Medical PNR Successfully`);
          window.location.reload()
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }
  
  

  getpriscriberAdmins(){
    this.service.getmedicalpnr().subscribe((res:any)=>{
      this.getgetappointmentsgets = res.data
    })
  }



}



