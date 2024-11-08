import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor (
    private route: Router
  ){}



  seizuopen(){
    this.route.navigate(['admin/config_lists_SeizureSymptoms'])
  }


  medicationopen(){
    this.route.navigate(['admin/config_lists_MedicationDestructionMethods'])
  }

  

}
