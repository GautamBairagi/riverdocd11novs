import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-setup-patient',
  templateUrl: './setup-patient.component.html',
  styleUrls: ['./setup-patient.component.css']
})
export class SetupPatientComponent implements OnInit {
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getPatients()
  }

  allPatientData:any = []
  getPatients(){
    this.api.adminPatientGet().subscribe((res:any)=>{
      console.log('all patient data', res)
      this.allPatientData = res.data
    })
  }

  id:any;
  patientByIdData:any=[];
patientById(data: any) {
  this.id = data;
  this.api.adminPatientGetById(data).subscribe((res: any) => {
    this.patientByIdData = res.data;
  })
}
}
