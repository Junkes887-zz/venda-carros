import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedoresRegisterPageRoutingModule } from './vendedores-register-routing.module';

import { VendedoresRegisterPage } from './vendedores-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VendedoresRegisterPageRoutingModule
  ],
  declarations: [VendedoresRegisterPage]
})
export class VendedoresRegisterPageModule {}
