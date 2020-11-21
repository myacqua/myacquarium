import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestisciAcquarioPageRoutingModule } from './gestisci-acquario-routing.module';

import { GestisciAcquarioPage } from './gestisci-acquario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestisciAcquarioPageRoutingModule
  ],
  declarations: [GestisciAcquarioPage]
})
export class GestisciAcquarioPageModule {}
