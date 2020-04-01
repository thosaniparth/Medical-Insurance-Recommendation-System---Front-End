import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyTableComponent } from './view-policy-table.component';

describe('ViewPolicyTableComponent', () => {
  let component: ViewPolicyTableComponent;
  let fixture: ComponentFixture<ViewPolicyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPolicyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
