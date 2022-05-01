import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CarrosApiService } from '../carros/carros-api.service';
import { Carro } from '../carros/carros.model';
import { Vendedor } from '../vendedor/vendedores.model';
import { Compra } from './comprar.model';
import { ComprarService } from './comprar.service';
import { VendedoresApiService } from '../vendedor/vendedores-api.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {
  compras: Compra[];
  carros: Carro[];
  vendedores: Vendedor[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private comprarService: ComprarService,
    private carrosApiService: CarrosApiService,
    private vendedoresApiService: VendedoresApiService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadComprar();

    this.carrosApiService.getCarros().subscribe((carros) => this.carros = carros);
    this.vendedoresApiService.getVendedores().subscribe((vendedores) => this.vendedores = vendedores);
  }

  loadComprar() {
    this.loading = true;
    this.comprarService.findAll().subscribe((compras) => {
      this.loading = false;
      this.compras = compras;
    });
  }

  atualizaCarro(carro: Carro) {
    carro.vendido = true;
    this.carrosApiService.save(carro).subscribe();
  }

  async add() {
    const alert = await this.alertController.create({
      header: 'Realizar compra',
      inputs: [
        {
          name: 'idVendedor',
          type: 'number',
          placeholder: 'Número vendedor',
        },
        {
          name: 'idCarro',
          type: 'number',
          placeholder: 'Número carro',
        },
      ],
      buttons: [
        {
          text: 'Salvar',
          handler: (value) => {
            this.loading = true;

            var carro = this.carros.find(carro => carro.id === parseInt(value.idCarro));
            if(carro == undefined) {
              this.messageService.error(`Carro com código ${value.idCarro} não encontrado`, () => {});
              this.loading = false;
              return;
            }

            var vendedor = this.vendedores.find(vendedor => vendedor.id === parseInt(value.idVendedor));
            if(vendedor == undefined) {
              this.messageService.error(`Vendedor com código ${value.vendedor} não encontrado`, () => {});
              return;
            }

            value.nomeCarro = carro.nome;
            value.nomeVendedor = vendedor.nome;

            this.comprarService.save(value).subscribe(() => {
              this.loadComprar();
              this.atualizaCarro(carro);
            });
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });
    alert.present();

  }
}
