import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientAddForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.patientAddForm = this.fb.group({
      name: [''],
      email: [''],
      gender:[''],
      password: [''],
      dateofBirth: [''],
      bloodGroup: [''],
      facilityName: [''],
      medications: [''],
      doctorName: [''],
      contact: [''],
      Behavior  : [''],
      medicalConditions: [''],
      allergies: [''],
      weight: [''],
      height: [''],
      eyeColor: [''],
    })
  }

  addPatient(){
    this.api.adminPatientAdd(this.patientAddForm.value).subscribe((res:any)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {

  }

}
