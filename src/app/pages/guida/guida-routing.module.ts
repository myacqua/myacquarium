import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidaPage } from './guida.page';

const routes: Routes = [
  {
    path: '',
    component: GuidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidaPageRoutingModule {}
