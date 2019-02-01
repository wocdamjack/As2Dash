import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPlacementHubComponent } from './patient-placement-hub.component';

describe('PatientPlacementHubComponent', () => {
  let component: PatientPlacementHubComponent;
  let fixture: ComponentFixture<PatientPlacementHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPlacementHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPlacementHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
