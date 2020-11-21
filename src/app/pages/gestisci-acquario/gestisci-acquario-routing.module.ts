import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestisciAcquarioPage } from './gestisci-acquario.page';

const routes: Routes = [
  {
    path: '',
    component: GestisciAcquarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestisciAcquarioPageRoutingModule {}
