import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AzureLoginComponent } from './azure-login/azure-login.component';
import { EntryComponent as EntryComponent } from './entry/entry.component';
import { EntryCardComponent, DialogOverview } from './entry-card/entry-card.component';
import { MaterialModule } from './material-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LaborHubComponent } from './features/labor/labor-hub/labor-hub.component';
import { LosHubComponent } from './features/los/los-hub/los-hub.component';
import { WorklistsHubComponent } from './features/worklists/worklists-hub/worklists-hub.component';
import { PatientPlacementHubComponent } from './features/patient-placement/patient-placement-hub/patient-placement-hub.component';
import { SuppliesHubComponent } from './features/supplies/supplies-hub/supplies-hub.component';
import { StaffingHubComponent } from './features/staffing/staffing-hub/staffing-hub.component';

//




@NgModule({
  declarations: [
    AppComponent,
    AzureLoginComponent,
    EntryComponent,
    EntryCardComponent,
    DialogOverview,

    LaborHubComponent,
    LosHubComponent,
    WorklistsHubComponent,
    PatientPlacementHubComponent,
    SuppliesHubComponent,
    StaffingHubComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    ChartsModule,
    LayoutModule
  ],
  entryComponents: [
    DialogOverview
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
