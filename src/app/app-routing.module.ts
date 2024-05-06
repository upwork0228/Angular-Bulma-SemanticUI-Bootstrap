import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgMaterialComponent } from './ag-material/ag-material.component';
import { BulmaComponent } from './bulma/bulma.component';
import { SemanticComponent } from './semantic/semantic.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routes: Routes = [
  {path: 'angular', component: AgMaterialComponent},
  {path: 'bulma', component: BulmaComponent},
  {path: 'semantic', component: SemanticComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  {path: '', redirectTo: '/angular', pathMatch: 'full'},
  {path: '**', component: AgMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
