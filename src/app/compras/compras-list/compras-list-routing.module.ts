import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasListPage } from './compras-list.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasListPageRoutingModule {}
