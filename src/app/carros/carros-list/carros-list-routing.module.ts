import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosListPage } from './carros-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosListPageRoutingModule {}
