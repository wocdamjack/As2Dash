import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesHubComponent } from './supplies-hub.component';

describe('SuppliesHubComponent', () => {
  let component: SuppliesHubComponent;
  let fixture: ComponentFixture<SuppliesHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
