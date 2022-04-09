import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedoresRegisterPageRoutingModule } from './vendedores-register-routing.module';

import { VendedoresRegisterPage } from './vendedores-register.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VendedoresRegisterPageRoutingModule
  ],
  declarations: [VendedoresRegisterPage]
})
export class VendedoresRegisterPageModule {}
