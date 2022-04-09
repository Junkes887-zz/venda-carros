import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedoresListPageRoutingModule } from './vendedores-list-routing.module';

import { VendedoresListPage } from './vendedores-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedoresListPageRoutingModule
  ],
  declarations: [VendedoresListPage]
})
export class VendedoresListPageModule {}
