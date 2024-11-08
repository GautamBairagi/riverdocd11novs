import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointAddForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder,private route:Router) {
    this.appointAddForm = this.fb.group({
      residentName: [''],
      title: [''],
      description:[''],
      date: [''],
      appointmentTimeFrom: [''],
      appointmentTimeTo: [''],
    })
  }

  ngOnInit(): void {
    this.getPatients();
  }

  allPatientData:any = []
  getPatients(){
    this.api.adminPatientGet().subscribe((res:any)=>{
      console.log('all patient data', res)
      this.allPatientData = res.data
    })
  }

  addAppointment(){
    this.api.adminAppointmentAdd(this.appointAddForm.value).subscribe((res:any)=>{
      console.log(res)
      this.route.navigate(["/admin/view_appointment"])
    })
  }
}
