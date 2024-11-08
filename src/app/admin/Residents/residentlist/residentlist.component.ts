import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-residentlist',
  templateUrl: './residentlist.component.html',
  styleUrls: ['./residentlist.component.css']
})
export class ResidentlistComponent implements OnInit {
  residentForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder,
    private swet :SweetsalertssService
  ) {
    this.residentForm = this.fb.group({
      firstname: [''],
      phone: [''],
      lastname: [''],
      gender: [''],
      date: [''],
      ssn: [''],
      religionName: [''],
      primaryLanguage: [''],
      residentPhone: [''],
      eyeColor: [''],
      heightUnit: [''],
      feet: [''],
      inches: [''],
      biography: [''],
      onHospice: [''],
      hospiceAgency: [''],
      onHomeHealth: [''],
      DNRandPOLST: [''],
      homeHealthAgency: [''],
      preferredHospital: [''],
      preferredPharmacy: [''],
      mortuary: [''],
      mortuaryNumber: [''],
      isVerbal: [''],
      incontinenceStatus: [''],
      ambulatoryStatus: [''],
      dangerResponsiveness: [''],
      addmissionDate: [''],
      room: [''],
      facilityStatus: ['']
    })
  }

  addResident() {
    this.api.addResident(this.residentForm.value).subscribe((res: any) => {
      this.swet.SucessToast(`Add Resident Successfully`);
      window.location.reload();
    })
  }

  ngOnInit(): void {
    this.getResident();
  }

  residentData: any[] = [];
  getResident() {
    this.api.residentget().subscribe((res: any) => {
      this.residentData = res.data;
      console.log(res)
    })
  }

}
