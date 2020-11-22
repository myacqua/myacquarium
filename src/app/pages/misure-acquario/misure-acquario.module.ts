import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisureAcquarioPageRoutingModule } from './misure-acquario-routing.module';

import { MisureAcquarioPage } from './misure-acquario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisureAcquarioPageRoutingModule
  ],
  declarations: [MisureAcquarioPage]
})
export class MisureAcquarioPageModule {}
