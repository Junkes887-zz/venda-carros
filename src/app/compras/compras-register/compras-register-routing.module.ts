import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasRegisterPage } from './compras-register.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasRegisterPage
  },
  {
    path: ':id',
    component: ComprasRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasRegisterPageRoutingModule {}
