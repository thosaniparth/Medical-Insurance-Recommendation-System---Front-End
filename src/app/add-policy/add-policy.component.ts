import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {PolicyService} from '../services/policy.service';

 
@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  public addPolicyForm: FormGroup;
  public errMsg:string="";
  public step = 0;
  constructor(private policyservice: PolicyService, private fb: FormBuilder, public router: Router) { }

  
  
  ngOnInit() {
    this.addPolicyForm = this.fb.group({
      policyName: [''],
      companyName: [''],
      coverInL: [''],
      cashlessHospitals: [''],
      premiumMonthly: [''],
      premiumYearly: ['']
    });
    this.step = 0;
  }
  public get policyName(){
    return this.addPolicyForm.controls.policyName;
  }
  public get companyName(){
    return this.addPolicyForm.controls.companyName;
  }
  public get coverInL(){
    return this.addPolicyForm.controls.coverInL;
  }
  public get cashlessHospitals(){
    return this.addPolicyForm.controls.cashlessHospitals;
  }
  public get premiumMonthly(){
    return this.addPolicyForm.controls.premiumMonthly;
  }
  public get premiumYearly(){
    return this.addPolicyForm.controls.premiumYearly;
  }

  onSubmit() 
  {
    const policyName: string = this.addPolicyForm.get('policyName').value;
    const companyName: string = this.addPolicyForm.get('companyName').value;
    const coverInL: Number = this.addPolicyForm.get('coverInL').value;
    const cashlessHospitals: Number = this.addPolicyForm.get('cashlessHospitals').value;
    const premiumMonthly: Number = this.addPolicyForm.get('premiumMonthly').value;
    const premiumYearly: Number = this.addPolicyForm.get('premiumYearly').value;
    this.policyservice.addPolicy(policyName,companyName,coverInL,cashlessHospitals,premiumMonthly,premiumYearly).subscribe(
      policy => {
        this.step++;
        //this.router.navigate(['/dashboard']);
      },
      error => {
        this.errMsg=error.error.message;
      }
    );
  }
  back()
  {
    this.ngOnInit();
  }

}
