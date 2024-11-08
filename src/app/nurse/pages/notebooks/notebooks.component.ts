import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {

  myForm!: FormGroup;
  ck :boolean=false;
  getpriscriber:any=[];

  constructor(
    private service: ApiService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.myForm = this.fb.group({
      notes: ['', Validators.required],
      nurseId: ['', ],
      patientName: ['', Validators.required],
      patientId: ['', ],
      shift:['',]
    })
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {
      console.log("Patient data", this.myForm.value);
      this.service.addnotesNurse(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          // this.swet.SucessToast(`Mail Send Successfully`);
          // this.route.navigate(["/Admin/View_Aloramail"]);
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }

  getpriscriberAdmins(){
    this.service.getnote().subscribe((res:any)=>{
      this.getpriscriber = res.data
      // this.sentEmailDatas = res.data.length
    })
  }


}
