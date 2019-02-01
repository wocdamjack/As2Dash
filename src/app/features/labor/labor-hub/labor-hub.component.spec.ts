import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborHubComponent } from './labor-hub.component';

describe('LaborHubComponent', () => {
  let component: LaborHubComponent;
  let fixture: ComponentFixture<LaborHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
