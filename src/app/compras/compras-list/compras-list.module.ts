import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasListPageRoutingModule } from './compras-list-routing.module';

import { ComprasListPage } from './compras-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasListPageRoutingModule
  ],
  declarations: [ComprasListPage]
})
export class ComprasListPageModule {}
