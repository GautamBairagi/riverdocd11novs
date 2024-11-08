import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-addprescriber',
  templateUrl: './addprescriber.component.html',
  styleUrls: ['./addprescriber.component.css']
})
export class AddprescriberComponent implements OnInit {
  myForm!: FormGroup;
  ck :boolean=false;
  getpriscriber:any=[];

  constructor(
    private service: ApiService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getpriscriberAdmin();
    this.myForm = this.fb.group({
      registerdAs: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {
      console.log("Patient data", this.myForm.value);
      this.service.addpriscriberAdmin(this.myForm.value).subscribe({
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

  getpriscriberAdmin(){
    this.service.getpriscriberAdmin().subscribe((res:any)=>{
      this.getpriscriber = res.data
      // this.sentEmailDatas = res.data.length
    })
  }

}
