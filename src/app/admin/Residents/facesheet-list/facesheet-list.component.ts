import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facesheet-list',
  templateUrl: './facesheet-list.component.html',
  styleUrls: ['./facesheet-list.component.css']
})
export class FacesheetListComponent implements OnInit {
  residentForm: FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private route:Router,){
    this.residentForm = this.fb.group({
      firstname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      profilePhoto: [''],

      primaryPhysician: ['', Validators.required],
      allergies: [''],
      medications: [''],
      medicalHistory: [''],
      carePlan: [''],

      insuranceProvider: ['', Validators.required],
      policyNumber: ['', Validators.required],
      coverageDetails: [''],

      emergencyContactName: ['', Validators.required],
      emergencyContactRelationship: ['', Validators.required],
      emergencyContactPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      emergencyContactAddress: ['', Validators.required],

      admissionDate: ['', Validators.required],
      reasonForAdmission: ['', Validators.required],
      careTeam: [''],

      specialInstructions: [''],
      mobilityNeeds: [''],
      dietaryPreferences: [''],
    });
  }

  onSubmit() {
    if (this.residentForm.valid) {
      console.log(this.residentForm.value);
      // Handle form submission logic here (send to backend, etc.)
    }
  }

  ngOnInit(): void {
    this.getResident();
  }

  residentData:any[] = [];
  getResident(){
    this.api.residentget().subscribe((res:any)=>{
      this.residentData = res.data;
      console.log(res)
    })
  }
}
