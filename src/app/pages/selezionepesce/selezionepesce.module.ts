import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelezionepescePageRoutingModule } from './selezionepesce-routing.module';

import { SelezionepescePage } from './selezionepesce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelezionepescePageRoutingModule
  ],
  declarations: [SelezionepescePage]
})
export class SelezionepescePageModule {}
