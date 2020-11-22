import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisureAcquarioPage } from './misure-acquario.page';

const routes: Routes = [
  {
    path: '',
    component: MisureAcquarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisureAcquarioPageRoutingModule {}
