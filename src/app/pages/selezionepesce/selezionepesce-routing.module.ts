import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelezionepescePage } from './selezionepesce.page';

const routes: Routes = [
  {
    path: '',
    component: SelezionepescePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelezionepescePageRoutingModule {}
