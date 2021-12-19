import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidaPageRoutingModule } from './guida-routing.module';

import { GuidaPage } from './guida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidaPageRoutingModule
  ],
  declarations: [GuidaPage]
})
export class GuidaPageModule {}
