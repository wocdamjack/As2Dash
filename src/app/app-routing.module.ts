import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';


import { AzureLoginComponent } from './azure-login/azure-login.component';


const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: EntryComponent },

  { path: 'azure', component: AzureLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
