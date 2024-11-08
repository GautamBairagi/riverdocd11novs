import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  constructor(
    private route:Router,
    private service :ApiService,
    private fb:FormBuilder,
    private swet:SweetsalertssService
  ){}
  openuserprofile(){
    this.route.navigate(['/admin/user_profile']);
  }
  myForm!: FormGroup;
  ck :boolean=false;
  getpriscriber:any=[];

  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.myForm = this.fb.group({
      firstname: ['', ],      
        middlename: ['', ],     
        lastname: ['', ],       
        email : ['', ],         
        displayName: ['', ],    
        gender : ['', ],        
        date: ['', ],           
        ssn : ['', ],           
        addressOne  : ['', ],   
        addressTwo : ['', ],    
        country: ['', ],        
        state  : ['', ],        
        city  : ['', ],         
        jobTitle : ['', ],      
        hireDate : ['', ],      
        emplaoyeeStatus: ['', ],
        role : ['', ],          
        image  : ['', ],  
        zipCode : ['', ],  

    })
  }
  // onSubmit() {
  //   if (this.myForm.invalid) {
  //     this.ck = true;
  //     return;
  //   } else {   
  //     console.log("Patient data", this.myForm.value);
  //     this.service.Useradds(this.myForm.value).subscribe({
  //       next: (res) => {
  //         console.log("Patient created data:", res);
  //       },
  //       error: (err) => {
  //         console.log("Error creating patient:", err);
  //       }
  //     });
  //   }
  // }

  onSubmit() {
    console.log("After Doctor data", this.myForm.value);
    
      try {
        console.log("Doctor data", this.myForm.value);
        const formData: any = new FormData();
        formData.append('image', this.imgs);
        // formData.append('license', this.qimgs);
        const arr = [
          'firstname',
          'middlename'  ,  
          'lastname'  ,    
          'email'    ,     
          'displayName' ,  
          'gender',  
          'date' ,         
          'ssn'  ,         
          'addressOne' ,   
          'addressTwo' ,   
          'country' ,      
          'state' ,        
          'city'   ,       
          'jobTitle' ,     
          'hireDate'   ,   
          'emplaoyeeStatus',
          'role'   ,       
          'zipCode' 

        ];
        for (const key of arr) {
          formData.append(key, this.myForm.get(key)?.value);
        }
        console.log("post api fire", this.myForm);
        console.log("formdata api fire", formData.getAll('image'));
        this.service.Useradds(formData).subscribe((res: any) => {
          console.log(res);
          this.swet.SucessToast(`Add User Successfully`);
          window.location.reload();
          // this.showNotification('Doctor added successfully.');
          // this.router.navigate(['/superAdmin/view_admins']);
        },
          (err) => {
            console.log(err);
            // this.showNotifications('An error occurred. Please try again.');
          });
      } catch (err) {
        console.log(err);
        // this.showNotifications('An exception occurred. Please try again.');
      }
    }







  getpriscriberAdmins(){
    this.service.Userlistget().subscribe((res:any)=>{
      this.getpriscriber = res.data
    })
  }





ckDep: boolean = false;
addDoctorform: any;
imgs: any;
qimgs: any;
notificationMessage: string = '';
notificationTimer: any;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'

   


Onupload(event: any) {
      if (event.target.files.length > 0) {
        this.imgs = event.target.files[0];
      }
      if (event.target.files && event.target.files[0]) {
        const filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            this.imagesBox = event.target.result;
          }
          reader.readAsDataURL(event.target.files[i]);
        }
      }
    }
  

}


