import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FormBuilder, FormGroup } from '@angular/forms';
// import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-setup-nurse',
  templateUrl: './setup-nurse.component.html',
  styleUrls: ['./setup-nurse.component.css']
})

export class SetupNurseComponent implements OnInit {
  activeInactiveForm:FormGroup;
  
  constructor(private api:ApiService,private fb:FormBuilder){
    this.activeInactiveForm = this.fb.group({

    })
  }

  ngOnInit(): void {
    this.getPatients()
  }

  allNurseData:any = []
  getPatients(){
    this.api.adminNurseGet().subscribe((res:any)=>{
      console.log('all patient data', res)
      this.allNurseData = res.data
    })
  }

  activeInactiveNurse(){
    this.api.activeNurse(this.id,this.patientstatus).subscribe((res: any) => {
      console.log('Patient updated successfully', res);
      // window.location.reload()
    }, (error) => {
      console.error('Error updating user', error);
      // Handle error
    });
  }

  dataSend: any

  toggleVerified(data: any) {
    var id = data.id;
    this.dataSend = {
      patientstatus: !data.patientstatus // Toggle between true and false
    };
    this.api.activeNurse(id, this.dataSend).subscribe(res => {
      if (res) {
        this.getPatients(); // Reload doctors list
      }
    });
  }

  id:any;
  patientByIdData:any=[];
  patientstatus:any;
nurseById(data: any) {
  this.id = data;
  this.api.adminNurseGetById(data).subscribe((res: any) => {
    this.patientByIdData = res.data;
    this.patientstatus = res.data[0].prescriberStatus;
  })
}

  ngAfterViewInit(): void {
    // Initialize DataTable after the view has been initialized
    ($ as any)(document).ready(function () {
      ($('#example') as any).DataTable();
    });
  }
}
