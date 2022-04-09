import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesListPageRoutingModule } from './clientes-list-routing.module';

import { ClientesListPage } from './clientes-list.page';
import { SexoPipe } from './clientes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesListPageRoutingModule
  ],
  declarations: [ClientesListPage, SexoPipe]
})
export class ClientesListPageModule {}
