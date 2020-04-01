import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-policy-table',
  templateUrl: './view-policy-table.component.html',
  styleUrls: ['./view-policy-table.component.css']
})
export class ViewPolicyTableComponent implements OnInit {

  constructor(private policyservice: PolicyService,public router: Router) { }
  public policies: [any];
  public policyName: string='';
  public companyName: string='';
  public coverInL: Number = 0 ;
  public cashlessHospitals: Number = 0;
  public premiumMonthly: Number = 0;
  public premiumYearly: Number = 0;
  public errMsg: string='';
  public step = 0;
  public admin: boolean;

  ngOnInit() {
    this.getPolicy()
    // this.step = 0;
    // this.policyName='';
    // this.companyName='';
    // this.coverInL = 0;
    // this.cashlessHospitals=0;
    // this.premiumMonthly=0;
    // this.premiumYearly=0;
    this.admin = JSON.parse(localStorage.getItem('currentUser')).admin;
  }

  getPolicy()
  {
    this.policyservice.viewPolicy().subscribe(
      policy=>
      {
        this.policies=policy;
        this.step = 0;
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
    //console.log(index);
    this.router.navigateByUrl('/dashboard/viewPolicy');
  }
  
}
