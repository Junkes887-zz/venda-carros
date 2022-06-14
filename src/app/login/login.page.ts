import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form: FormGroup;
  logado: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private vendedoresApiService: VendedoresApiService,
  ) {
  }

  ngOnInit() {
    console.log('LoginPage ngOnInit');
    this.form = this.formBuilder.group({
      documento: '',
    });

    const login = localStorage.getItem("login");

    this.logado = login != "null";
    
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
    this.vendedoresApiService.getVendedores("").subscribe(
      (vendedores) => {
        const {documento} = this.form.value;
        vendedores.forEach(vendedor => {
          if(vendedor.cpf == documento) {
            localStorage.setItem("login", vendedor.cpf);
            window.open(`http://localhost:8100/funcionario_nome=${encodeURI(vendedor.nome)}`)
            this.ngOnInit()
          }
          this.messageService.error('Funcionario não encotrado', () =>  {})
        });
      },
      () =>
        this.messageService.error('Erro ao buscar a lista de vendedores', () =>  this.login())
    );
  }

  logout() {
    localStorage.setItem("login", null);
    this.ngOnInit()
  }
}
