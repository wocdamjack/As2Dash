import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingHubComponent } from './staffing-hub.component';

describe('StaffingHubComponent', () => {
  let component: StaffingHubComponent;
  let fixture: ComponentFixture<StaffingHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
