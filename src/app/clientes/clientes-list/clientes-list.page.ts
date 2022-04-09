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
import { ClientesApiService } from '../clientes-api.service';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.page.html',
  styleUrls: ['./clientes-list.page.scss'],
})
export class ClientesListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  clientes: Cliente[];

  constructor(
    private alertController: AlertController,
    private clientesApiService: ClientesApiService,
    private messageService: MessageService,
  ) {
    this.clientes = [];
  }

  ngOnInit() {
    console.log('ClientesListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listClientes();
    console.log('ClientesListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ClientesListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ClientesListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ClientesListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ClientesListPage ngOnDestroy');
  }

  listClientes() {
    this.clientesApiService.getClientes().subscribe(
      (clientes) => (this.clientes = clientes),
      () =>
        this.messageService.error('Erro ao buscar a lista de clientes', () => this.listClientes())
    );
  }

  confirmRemove(cliente: Cliente) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o cliente ${cliente.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(cliente),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(cliente: Cliente) {
    this.clientesApiService.remove(cliente.id).subscribe(
      () => {
        this.listClientes();
      },
      () => this.messageService.error('Erro ao excluir o cliente', () => this.remove(cliente))
    );
  }

}
