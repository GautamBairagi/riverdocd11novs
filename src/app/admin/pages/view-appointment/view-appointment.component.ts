import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAppointments()
  }

  allAppointmentData:any = []
  getAppointments(){
    this.api.adminAppointmentGet().subscribe((res:any)=>{
      this.allAppointmentData = res.data
    })
  }
}
