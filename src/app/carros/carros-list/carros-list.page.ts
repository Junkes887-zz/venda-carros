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
import { CarrosApiService } from '../carros-api.service';
import { Carro } from '../carros.model';

import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.page.html',
  styleUrls: ['./carros-list.page.scss'],
})
export class CarrosListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  carros: Carro[];

  constructor(
    private alertController: AlertController,
    private carrosApiService: CarrosApiService,
    private messageService: MessageService,
  ) {
    this.carros = [];
  }

  ngOnInit() {
    console.log('CarrosListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listCarros();
    console.log('CarrosListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('CarrosListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('CarrosListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('CarrosListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('CarrosListPage ngOnDestroy');
  }

  listCarros() {
    this.carrosApiService.getCarros().subscribe(
      (carros) => (this.carros = carros.filter((carro) => carro.vendido == false)),
      () =>
        this.messageService.error('Erro ao buscar a lista de carros', () => this.listCarros())
    );
  }

  confirmRemove(carro: Carro) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o carro ${carro.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(carro),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(carro: Carro) {
    this.carrosApiService.remove(carro.id).subscribe(
      () => {
        // Alternativa 1
        this.listCarros();
        // Alternativa 2
        // this.carros = this.carros.filter(g => g.id !== carro.id);
      },
      () => this.messageService.error('Erro ao excluir o carro', () => this.remove(carro))
    );
  }

}
