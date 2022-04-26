import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AlertController,
  ToastController,
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { VendedoresApiService } from '../vendedor/vendedores-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  documento: string

  constructor(
    private alertController: AlertController,
    private messageService: MessageService,
    private vendedoresApiService: VendedoresApiService,
  ) {
  }

  ngOnInit() {
    console.log('LoginPage ngOnInit');
  }

  ionViewWillEnter(): void {
    console.log('LoginPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('LoginPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('LoginPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('LoginPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('LoginPage ngOnDestroy');
  }

  login() {
    this.vendedoresApiService.getVendedores().subscribe(
      (vendedores) => ((vendedores)=> {
        vendedores.forEach(vendedor => {
          vendedor.cpf == this.documento;
        });
      }),
      () =>
        this.messageService.error('Erro ao buscar a lista de vendedores', () => this.login())
    );
  }
}
