import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { ClientesApiService } from '../clientes-api.service';
import { Sexo } from '../clientes.model';

@Component({
  selector: 'app-clientes-register',
  templateUrl: './clientes-register.page.html',
  styleUrls: ['./clientes-register.page.scss'],
})
export class ClientesRegisterPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesApiService: ClientesApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log('ClientesRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      sexo: [Sexo.MASCULINO, Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      telefone: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.clientesApiService.findById(id).subscribe(
      (cliente) => {
        if (cliente) {
          this.form.patchValue({
            ...cliente,
          });
        }
      },
      () => this.messageService.error(`Erro ao buscar o cliente com código ${id}`, () => this.findById(id))
    );
  }

  ionViewWillEnter(): void {
    console.log('ClientesRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ClientesRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ClientesRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ClientesRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ClientesRegisterPage ngOnDestroy');
  }

  salvar() {
    const { nome } = this.form.value;

    this.clientesApiService.save(this.form.value).subscribe(
      () => this.router.navigate(['clientes-list']),
      () =>
        this.messageService.error(`Erro ao salvar o cliente ${nome}`, () =>
          this.salvar()
        )
    );
  }
}
