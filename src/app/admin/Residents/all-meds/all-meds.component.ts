import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-meds',
  templateUrl: './all-meds.component.html',
  styleUrls: ['./all-meds.component.css']
})
export class AllMedsComponent {
  constructor(private api:ApiService, private fb:FormBuilder,private route:Router,){}

  ngOnInit(): void {
    this.getResident();
  }

  openuserprofile(){
    this.route.navigate(['/admin/resident_create_report']);
  }

  residentData:any[] = [];
  getResident(){
    this.api.residentget().subscribe((res:any)=>{
      this.residentData = res.data;
      console.log(res)
    })
  }
}
