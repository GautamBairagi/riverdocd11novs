import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-view-discharge',
  templateUrl: './view-discharge.component.html',
  styleUrls: ['./view-discharge.component.css']
})
export class ViewDischargeComponent implements OnInit {

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getDischarge()
  }

  allDischargeData:any = []
  getDischarge(){
    this.api.adminDischargeGet().subscribe((res:any)=>{
      this.allDischargeData = res.data
    })
  }

}
