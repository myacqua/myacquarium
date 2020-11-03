import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiPageRoutingModule } from './aggiungi-routing.module';

import { AggiungiPage } from './aggiungi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggiungiPageRoutingModule
  ],
  declarations: [AggiungiPage]
})
export class AggiungiPageModule {}
