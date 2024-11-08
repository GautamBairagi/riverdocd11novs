import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../API/api.service';
import { SweetsalertssService } from '../sweetsalertss.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  loginForm!:FormGroup;
  ck: boolean = false;
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor (
    private fb:FormBuilder,
    private router:Router,
    private service:ApiService,
    private swet :SweetsalertssService
  ){}
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  loading: boolean = false;
loginSuccess: boolean = false;
loginError: boolean = false;


addPatients() {
  if (this.loginForm.invalid) {
    this.ck = true;
    return;
  } 
  else {
    console.log("Patient data", this.loginForm.value);
    this.loading = true;
    this.loginSuccess = false;
    this.loginError = false;
    this.service.mainLogin(this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.role === 'admin' || res.role === 'prescriber' || res.role === 'patient') {
          this.handleRoleBasedRedirection(res);
          this.loginSuccess = true;  // Login success message
          const login = res.name;   
          this.swet.SucessToast(`${login} Login successfully`);
        } else {
          this.loginError = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.loginError = true;  // Error message
      }
    });
  }
}

handleRoleBasedRedirection(res: any) {
  if (res.role === 'admin') {
    localStorage.setItem('token', res.token);
    localStorage.setItem('superadmin_name', res.name);
    this.router.navigate(["/admin/dashboard_overview"]);
  } else if (res.role === 'prescriber') {
    localStorage.setItem('token', res.token);
    localStorage.setItem('id', res.id);
    localStorage.setItem('nurse_name', res.name);
    this.router.navigate(["/nurse/dashboard"]);
  } else if (res.role === 'patient') {
    localStorage.setItem('token', res.token);
    localStorage.setItem('patient_name', res.firstname);
    this.router.navigate(["/patient/dashboard"]);
  }
}

onChanges(data: string) {
  if (data === 'admin') {
    this.loginForm.controls['email'].setValue('admin@gmail.com');
    this.loginForm.controls['password'].setValue('admin');
  }
  else if (data === 'prescriber') {
    // this.form.controls['mobileNumber'].setValue('+919644605330');
    this.loginForm.controls['email'].setValue('shivani@gmail.com');
    this.loginForm.controls['password'].setValue('shivani@123');
  }
  else if (data === 'patient') {
    // this.form.controls['mobileNumber'].setValue('+919644605330');
    this.loginForm.controls['email'].setValue('krish@gmail.com');
    this.loginForm.controls['password'].setValue('123456');
  }
}
  
}
