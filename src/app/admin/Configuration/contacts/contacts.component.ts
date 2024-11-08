import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(
    private route:Router,
    private service :ApiService,
    private fb:FormBuilder,
    private swet:SweetsalertssService
  ){}
  
  myForm!: FormGroup;
  myForm2!:FormGroup
  ck :boolean=false;

  getgetpharmacys:any=[];
  getmedicalprofessional:any=[];

  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.getmedicalprofessionals();
    this.myForm = this.fb.group({
      basicInfo:['',],
      email:['',],
      phone:['',],
    })
    this.myForm2 = this.fb.group({
      basicInfo:['',],
      firstname:['',],
      lastname:['',],
      email:['',],
      speciality:['',],
      phone:['',],
      addressOne:['',],
      addressTwo:['',],
      country:['',],
      state:['',],
      city:['',],
      zipCode:['',],
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
          this.swet.SucessToast(`Add Pharmacy Successfully`)
          window.location.reload();
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



  onSubmitmedical() {
    if (this.myForm2.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm2.value);
      this.service.addmedicalprofessional(this.myForm2.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          this.swet.SucessToast(`Add Medical Professional Successfully`)
          window.location.reload();
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }
  getmedicalprofessionals(){
    this.service.getmedicalprofessional().subscribe((res:any)=>{
      this.getmedicalprofessional = res.data
    })
  }

}
