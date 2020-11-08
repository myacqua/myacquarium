import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelezioneOggettoPageRoutingModule } from './selezione-oggetto-routing.module';

import { SelezioneOggettoPage } from './selezione-oggetto.page';
import { SchedaPesceComponent } from 'src/app/components/scheda-pesce/scheda-pesce.component';
import { SchedaPianteComponent } from 'src/app/components/scheda-piante/scheda-piante.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelezioneOggettoPageRoutingModule
  ],
  declarations: [SelezioneOggettoPage,SchedaPesceComponent,SchedaPianteComponent]
})
export class SelezioneOggettoPageModule {}
