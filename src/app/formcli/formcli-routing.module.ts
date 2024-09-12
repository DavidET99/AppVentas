import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCliPage } from './formcli.page';

const routes: Routes = [
  {
    path: '',
    component: FormCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormcliPageRoutingModule {}
