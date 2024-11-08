import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-admin-communication',
  templateUrl: './admin-communication.component.html',
  styleUrls: ['./admin-communication.component.css']
})
export class AdminCommunicationComponent implements OnInit {
  constructor(
    private route:Router,
    private service :ApiService,
    private fb:FormBuilder,
    private swet :SweetsalertssService
  ){}
  
  myForm!: FormGroup;
  ck :boolean=false;
  getgetannouncement:any=[];


  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.myForm = this.fb.group({
      to:['',],           
      subject:['',],      
      body  :['',],       
    })
   
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm.value);
      this.service.addannouncements(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          this.swet.SucessToast(`Add Announcement Successfully`)
          window.location.reload();
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }

  
  
  getpriscriberAdmins(){
    this.service.getannouncement().subscribe((res:any)=>{
      this.getgetannouncement = res.data
    })
  }

}
