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
import { VendedoresApiService } from '../vendedores-api.service';
import { Vendedor } from '../vendedores.model';

import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-vendedores-list',
  templateUrl: './vendedores-list.page.html',
  styleUrls: ['./vendedores-list.page.scss'],
})
export class VendedoresListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  vendedores: Vendedor[];

  constructor(
    private alertController: AlertController,
    private vendedoresApiService: VendedoresApiService,
    private messageService: MessageService,
  ) {
    this.vendedores = [];
  }

  ngOnInit() {
    console.log('VendedoresListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listVendedores("");
    console.log('VendedoresListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('VendedoresListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('VendedoresListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('VendedoresListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('VendedoresListPage ngOnDestroy');
  }

  listVendedores(nome) {
    this.vendedoresApiService.getVendedores(nome).subscribe(
      (vendedores) => (this.vendedores = vendedores),
      () =>
        this.messageService.error('Erro ao buscar a lista de vendedores', () => this.listVendedores(nome))
    );
  }

  onChangeFiltro(nome) : void {
    this.listVendedores(nome);    
  }

  confirmRemove(vendedor: Vendedor) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o vendedor ${vendedor.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(vendedor),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(vendedor: Vendedor) {
    this.vendedoresApiService.remove(vendedor.id).subscribe(
      () => {
        this.listVendedores("");
      },
      () => this.messageService.error('Erro ao excluir o vendedor', () => this.remove(vendedor))
    );
  }

}
