import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicercaPageRoutingModule } from './ricerca-routing.module';

import { RicercaPage } from './ricerca.page';
import { RicercaPesceComponent } from 'src/app/components/ricerca-pesce/ricerca-pesce.component';
import { RicercaPianteComponent } from 'src/app/components/ricerca-piante/ricerca-piante.component';
import { RicercaAccessoriComponent } from 'src/app/components/ricerca-accessori/ricerca-accessori.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicercaPageRoutingModule,
  ],
  declarations: [
    RicercaPage,
    RicercaPesceComponent,
    RicercaPianteComponent,
    RicercaAccessoriComponent

  ]
})
export class RicercaPageModule {}
