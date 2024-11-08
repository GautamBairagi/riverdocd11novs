import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-admin-care',
  templateUrl: './admin-care.component.html',
  styleUrls: ['./admin-care.component.css']
})
export class AdminCareComponent {


  constructor(
    private route:Router,
    private service :ApiService,
    private fb:FormBuilder,
    private swet :SweetsalertssService
  ){}
  
  myForm!: FormGroup;

  ck :boolean=false;

  getgetpharmacys:any=[];
  getmedicalprofessional:any=[];

  ngOnInit(): void {
    this.getpriscriberAdmins();
  
    this.myForm = this.fb.group({
      basicInfo:['',],
      email:['',],
      phone:['',],
    })
    
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm.value);
      this.service.addpharmacy(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          this.swet.SucessToast(`Add Pharmacy  Successfully`);
          window.location.reload()
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }
  getpriscriberAdmins(){
    this.service.getpharmacy().subscribe((res:any)=>{
      this.getgetpharmacys = res.data
    })
  }



}
