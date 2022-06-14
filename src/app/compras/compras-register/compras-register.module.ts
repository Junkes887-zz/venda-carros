import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasRegisterPageRoutingModule } from './compras-register-routing.module';

import { ComprasRegisterPage } from './compras-register.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComprasRegisterPageRoutingModule
  ],
  declarations: [ComprasRegisterPage]
})
export class ComprasRegisterPageModule {}
