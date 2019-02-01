import { Component, OnInit, Input, Inject } from '@angular/core';
import { WeekendTotals } from '@app/core/models/interfaces';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  icon: string;
  app: string;
  name: string;
}
@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css']
})
export class EntryCardComponent implements OnInit {

  @Input() title: string
  @Input() data: WeekendTotals[]

  icon: string;
  app: string;
  name: string;
  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {
    this.icon;
    this.setIcon();
console.log('icon in ngOnInit='+ this.icon);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px',
      data: {name: this.title, app: this.app, icon: this.icon}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.app = result;
    });
  }

  // Set the icon
  setIcon() {

    if (this.title === 'Labor') {
      this.icon = 'medical-icon-administration';
    }
    if (this.title=== 'Worklists') {
      this.icon = 'medical-icon-laboratory';
    }
    if (this.title=== 'LOS') {
      this.icon = 'medical-icon-inpatient';
    }
    if (this.title=== 'PatientPlacement') {
      this.icon = 'medical-icon-registration';
    }
    if (this.title=== 'Supplies') {
      this.icon = 'medical-icon-gift-shop';
    }
    if (this.title=== 'Staffing') {
      this.icon = 'medical-icon-medical-records';
    }
  }
}
@Component({
  selector: 'dialog-overview',
  template: `
  <mat-card-title>
    <span class="{{data.icon}}"></span>
    {{data.name}}Hub   
  </mat-card-title>

  <div *ngIf="data.name==='Labor'">
    <app-labor-hub></app-labor-hub>
  </div>
  <div *ngIf="data.name==='LOS'">
    <app-los-hub></app-los-hub>
  </div>
  <div *ngIf="data.name==='Worklists'">
    <app-worklists-hub></app-worklists-hub>
  </div>  
  <div *ngIf="data.name==='PatientPlacement'">
    <app-patient-placement-hub></app-patient-placement-hub>
  </div>
  <div *ngIf="data.name==='Supplies'">
    <app-supplies-hub></app-supplies-hub>
  </div>
  <div *ngIf="data.name==='Staffing'">
    <app-staffing-hub></app-staffing-hub>
  </div>

  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="data.app" cdkFocusInitial>Close</button>
  </div>
  `
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log('app:' + data.app)
    }

    
}