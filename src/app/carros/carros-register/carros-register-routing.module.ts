import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosRegisterPage } from './carros-register.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosRegisterPage
  },
  {
    path: ':id',
    component: CarrosRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosRegisterPageRoutingModule {}
