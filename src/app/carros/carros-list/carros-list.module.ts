import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosListPageRoutingModule } from './carros-list-routing.module';

import { CarrosListPage } from './carros-list.page';
import { TipoPipe } from './carros.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosListPageRoutingModule
  ],
  declarations: [CarrosListPage, TipoPipe]
})
export class CarrosListPageModule {}
