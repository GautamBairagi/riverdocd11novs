import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import { SweetsalertssService } from 'src/app/sweetsalertss.service';


@Component({
  selector: 'app-community-aur-social-involvement',
  templateUrl: './community-aur-social-involvement.component.html',
  styleUrls: ['./community-aur-social-involvement.component.css']
})
export class CommunityAurSocialInvolvementComponent implements OnInit {
  thisForm!:FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder,private swet :SweetsalertssService){
    this.thisForm = this.fb.group({
      patientName:[''],
      socialActivityLevel:[''],
      perffredSocialActivities:[''],
      frequencyOfSocialInteraction:[''],
      communitySupportGroup:[''],
      BarriesOfSocialInvolvement:[''],
      communityEventParticipation:[''],
    })
  }

  addMyForm(){
    this.api.addCommunicationAndSocial(this.thisForm.value).subscribe((res:any)=>{
      console.log('communication and social form response',res)
      this.swet.SucessToast(`Community or social involment added`);

      window.location.reload()
    })
  }

  ngOnInit(): void {
    this.getResident();
    this.getCommunicationAndsocial();
  }

  CommunicationAndsocialData:any[] = []
  getCommunicationAndsocial(){
    this.api.getCommunicationAndSocial().subscribe((res:any)=>{
      this.CommunicationAndsocialData = res.data

    })
  }

  residentData:any[] = [];
  getResident(){
    this.api.residentget().subscribe((res:any)=>{
      this.residentData = res.data;
      console.log(res)
    })
  }

}
