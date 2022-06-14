import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { CarrosApiService } from 'src/app/carros/carros-api.service';
import { Carro } from 'src/app/carros/carros.model';
import { VendedoresApiService } from 'src/app/vendedor/vendedores-api.service';
import { Vendedor } from 'src/app/vendedor/vendedores.model';
import { MessageService } from '../../services/message.service';
import { ComprasApiService } from '../compras-api.service';
import { Compra, FormaPagamento } from '../compras.model';

@Component({
  selector: 'app-compras-register',
  templateUrl: './compras-register.page.html',
  styleUrls: ['./compras-register.page.scss'],
})
export class ComprasRegisterPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  form: FormGroup;
  carros: Carro[];
  vendedores: Vendedor[];

  constructor(
    private formBuilder: FormBuilder,
    private comprasApiService: ComprasApiService,
    private vendedoresApiService: VendedoresApiService,
    private carrosApiService: CarrosApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log('ComprasRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      carro: [null, Validators.required],
      vendedor: [null, Validators.required],
      desconto: ['', Validators.required],
      dataCompra: [''],
      formaPagamento: [FormaPagamento.A_VISTA, Validators.required],
    });


    this.buscaCarros()
    this.buscaVendedores()
    
    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  buscaCarros() {
    this.carrosApiService.getCarros("").subscribe(
      (carros) => {
        this.carros = carros.filter(carro => carro.vendido == false)
      },
      () => this.messageService.error(`Erro ao buscar carros`, () => {})
    );
  }

  buscaVendedores() {
    this.vendedoresApiService.getVendedores("").subscribe(
      (vendedores) => {
        this.vendedores = vendedores
      },
      () => this.messageService.error(`Erro ao buscar vendedores`, () => {})
    );
  }


  findById(id: number) {
    this.comprasApiService.findById(id).subscribe(
      (compra) => {
        if (compra) {
          this.form.patchValue({
            ...compra,
          });
        }
      },
      () => this.messageService.error(`Erro ao buscar compra com código ${id}`, () => this.findById(id))
    );
  }

  ionViewWillEnter(): void {
    console.log('ComprasRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ComprasRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ComprasRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ComprasRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ComprasRegisterPage ngOnDestroy');
  }

  salvar() {
    this.comprasApiService.save(this.form.value).subscribe(
      () => this.router.navigate(['compras-list']),
      () =>
        this.messageService.error(`Erro ao salvar compra`, () =>
          this.salvar()
        )
    );
  }
}
