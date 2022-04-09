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

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.page.html',
  styleUrls: ['./clientes-list.page.scss'],
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

  constructor(
    private alertController: AlertController,
    private messageService: MessageService,
  ) {
  }

}
