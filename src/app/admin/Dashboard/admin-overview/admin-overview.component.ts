import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent {

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
    this.getResident();
    this.myForm = this.fb.group({
      residentName:['',],    
      title:['',],         
      description:['',],  
      date:['',],      
      appointmentTime:['',],
    })
   
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm.value);
      this.service.addappointmentsaddss(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          this.swet.SucessToast(`Appointment Add Successfully`);
          // this.route.navigate(["/admin/dashboard_overview"]);
          window.location.reload()
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }
  getpriscriberAdmins(){
    this.service.getappointmentsgetss().subscribe((res:any)=>{
      this.getgetappointmentsgets = res.data
    })
  }


  residentData:any[] = [];
  getResident(){
    this.service.residentget().subscribe((res:any)=>{
      this.residentData = res.data;
      console.log(res)
    })
  }

}
