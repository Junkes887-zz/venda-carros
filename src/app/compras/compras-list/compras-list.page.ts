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
import { ComprasApiService } from '../compras-api.service';
import { Compra } from '../compras.model';

import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.page.html',
  styleUrls: ['./compras-list.page.scss'],
})
export class ComprasListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  compras: Compra[];

  constructor(
    private alertController: AlertController,
    private comprasApiService: ComprasApiService,
    private messageService: MessageService,
  ) {
    this.compras = [];
  }

  ngOnInit() {
    console.log('ComprasListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listCompras();
    console.log('ComprasListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ComprasListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ComprasListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ComprasListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ComprasListPage ngOnDestroy');
  }

  listCompras() {
    this.comprasApiService.getCompras().subscribe(
      (compras) => (this.compras = compras),
      () =>
        this.messageService.error('Erro ao buscar a lista de compras', () => this.listCompras())
    );
  }

  confirmRemove(compra: Compra) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o compra ${compra.id}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(compra),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(compra: Compra) {
    this.comprasApiService.remove(compra.id).subscribe(
      () => {
        this.listCompras();
      },
      () => this.messageService.error('Erro ao excluir o compra', () => this.remove(compra))
    );
  }

}
