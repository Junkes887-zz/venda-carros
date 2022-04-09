import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesRegisterPageRoutingModule } from './clientes-register-routing.module';

import { ClientesRegisterPage } from './clientes-register.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClientesRegisterPageRoutingModule
  ],
  declarations: [ClientesRegisterPage]
})
export class ClientesRegisterPageModule {}
