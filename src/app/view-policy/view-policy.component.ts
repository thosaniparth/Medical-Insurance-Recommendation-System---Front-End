import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {
  public policy: any;
  public policyrecommends: [any];
  public errMsg: string='';
  constructor(private policyservice: PolicyService,public router: Router) { }

  ngOnInit() {
    //this.viewPolicy(this.policy)
    this.policy = JSON.parse(localStorage.getItem('policy'));
    //console.log(this.policy);
    this.getRecommendation();
  }
  getRecommendation(){
    this.policyservice.Recommender(this.policy.index).subscribe(
      recommend=>
      {
        this.policyrecommends = recommend;
        //console.log(this.policyrecommends);
      },
      error=>
      {
        this.errMsg=error.error.message;
      }
    )
  }
  viewPolicy(policy: any)
  {
    localStorage.setItem('policy', JSON.stringify(policy));
    this.ngOnInit();
  }

  back()
  {
    localStorage.removeItem('policy');
    this.router.navigate(['/dashboard']);
  }
  
}
