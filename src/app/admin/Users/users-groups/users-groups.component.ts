import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';

@Component({
  selector: 'app-users-groups',
  templateUrl: './users-groups.component.html',
  styleUrls: ['./users-groups.component.css']
})
export class UsersGroupsComponent implements OnInit {
  thisForm!:FormGroup;


  constructor(private api:ApiService,private fb:FormBuilder,
    private swet:SweetsalertssService
  ){
    this.thisForm = this.fb.group({
      groupName:[''],
      description:[''],
    })
  }

  facilityUserGroup(){
    this.api.addUserGroup(this.thisForm.value).subscribe((res:any)=>{
      this.swet.SucessToast(`Add User Group Successfully`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getUserGroup();
  }

  userGroupData: any[] = [];
  getUserGroup(){
    this.api.getUserGroup().subscribe((res:any)=>{
      this.userGroupData = res.data;
    })
  }

}
