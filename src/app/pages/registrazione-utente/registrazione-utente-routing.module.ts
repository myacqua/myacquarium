import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrazioneUtentePage } from './registrazione-utente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrazioneUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrazioneUtentePageRoutingModule {}
