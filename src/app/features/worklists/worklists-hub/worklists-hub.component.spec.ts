import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistsHubComponent } from './worklists-hub.component';

describe('WorklistsHubComponent', () => {
  let component: WorklistsHubComponent;
  let fixture: ComponentFixture<WorklistsHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistsHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistsHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
