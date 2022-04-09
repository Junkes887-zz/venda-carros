import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'carros-list',
    loadChildren: () => import('./carros/carros-list/carros-list.module').then( m => m.CarrosListPageModule)
  },
  {
    path: 'carros-register',
    loadChildren: () => import('./carros/carros-register/carros-register.module').then( m => m.CarrosRegisterPageModule)
  },
  {
    path: 'vendedores-list',
    loadChildren: () => import('./vendedor/vendedor-list/vendedores-list.module').then( m => m.VendedoresListPageModule)
  },
  {
    path: 'vendedores-register',
    loadChildren: () => import('./vendedor/vendedores-register/vendedores-register.module').then( m => m.VendedoresRegisterPageModule)
  },
  {
    path: 'clientes-list',
    loadChildren: () => import('./clientes/clientes-list/clientes-list.module').then( c => c.ClientesListPageModule)
  },
  {
    path: 'clientes-register',
    loadChildren: () => import('./clientes/clientes-register/clientes-register.module').then( c => c.ClientesRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
