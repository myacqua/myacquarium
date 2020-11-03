import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoAcquarioPage } from './nuovo-acquario.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoAcquarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoAcquarioPageRoutingModule {}
