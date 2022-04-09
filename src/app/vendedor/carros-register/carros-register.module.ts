import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosRegisterPageRoutingModule } from './carros-register-routing.module';

import { CarrosRegisterPage } from './carros-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CarrosRegisterPageRoutingModule
  ],
  declarations: [CarrosRegisterPage]
})
export class CarrosRegisterPageModule {}
