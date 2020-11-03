import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoAcquarioPageRoutingModule } from './nuovo-acquario-routing.module';

import { NuovoAcquarioPage } from './nuovo-acquario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovoAcquarioPageRoutingModule
  ],
  declarations: [NuovoAcquarioPage]
})
export class NuovoAcquarioPageModule {}
