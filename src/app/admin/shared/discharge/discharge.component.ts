import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';


@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.component.html',
  styleUrls: ['./discharge.component.css']
})
export class DischargeComponent implements OnInit {
  dischargeForm: FormGroup;
  showRelocationField: boolean = false;

  constructor(private fb: FormBuilder,private api:ApiService,private route:Router) {
    this.dischargeForm = this.fb.group({
      residentName: [''],
      Date: [''],
      dischargeReason: [''],
      relocateTo: ['']
    });
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

  toggleHealthcareDropdown() {
    const selectedReason = this.dischargeForm.get('dischargeReason')?.value;
    this.showRelocationField = (selectedReason === 'relocation');
  }

  addDisharge(){
    this.api.adminDischargeAdd(this.dischargeForm.value).subscribe((res:any)=>{
      this.route.navigate(["/admin/view_discharge"])
    })
  }
  

}
