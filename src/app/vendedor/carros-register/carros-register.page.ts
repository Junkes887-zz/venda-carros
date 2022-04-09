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
import { CarrosApiService } from '../carros-api.service';
import { Tipo } from '../carros.model';

@Component({
  selector: 'app-carros-register',
  templateUrl: './carros-register.page.html',
  styleUrls: ['./carros-register.page.scss'],
})
export class CarrosRegisterPage
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
    private carrosApiService: CarrosApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log('CarrosRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', Validators.required],
      ano: [''],
      tipo: [Tipo.HATCH, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.carrosApiService.findById(id).subscribe(
      (carro) => {
        if (carro) {
          this.form.patchValue({
            ...carro,
          });
        }
      },
      () => this.messageService.error(`Erro ao buscar o carro com código ${id}`, () => this.findById(id))
    );
  }

  ionViewWillEnter(): void {
    console.log('CarrosRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('CarrosRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('CarrosRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('CarrosRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('CarrosRegisterPage ngOnDestroy');
  }

  salvar() {
    // const nome = this.form.value.nome;
    const { nome } = this.form.value;

    this.carrosApiService.save(this.form.value).subscribe(
      () => this.router.navigate(['carros-list']),
      () =>
        this.messageService.error(`Erro ao salvar o carro ${nome}`, () =>
          this.salvar()
        )
    );
  }
}
