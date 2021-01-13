import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperoPasswordPageRoutingModule } from './recupero-password-routing.module';

import { RecuperoPasswordPage } from './recupero-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperoPasswordPageRoutingModule
  ],
  declarations: [RecuperoPasswordPage]
})
export class RecuperoPasswordPageModule {}
