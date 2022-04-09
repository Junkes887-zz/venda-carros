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
import { VendedoresApiService } from '../vendedores-api.service';

@Component({
  selector: 'app-vendedores-register',
  templateUrl: './vendedores-register.page.html',
  styleUrls: ['./vendedores-register.page.scss'],
})
export class VendedoresRegisterPage
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
    private vendedoresApiService: VendedoresApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log('VendedoresRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', Validators.required, Validators.minLength(11)],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.vendedoresApiService.findById(id).subscribe(
      (vendedor) => {
        if (vendedor) {
          this.form.patchValue({
            ...vendedor,
          });
        }
      },
      () => this.messageService.error(`Erro ao buscar o vendedor com código ${id}`, () => this.findById(id))
    );
  }

  ionViewWillEnter(): void {
    console.log('VendedoresRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('VendedoresRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('VendedoresRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('VendedoresRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('VendedoresRegisterPage ngOnDestroy');
  }

  salvar() {
    // const nome = this.form.value.nome;
    const { nome } = this.form.value;

    this.vendedoresApiService.save(this.form.value).subscribe(
      () => this.router.navigate(['vendedores-list']),
      () =>
        this.messageService.error(`Erro ao salvar o vendedor ${nome}`, () =>
          this.salvar()
        )
    );
  }
}
