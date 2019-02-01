import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosHubComponent } from './los-hub.component';

describe('LosHubComponent', () => {
  let component: LosHubComponent;
  let fixture: ComponentFixture<LosHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
