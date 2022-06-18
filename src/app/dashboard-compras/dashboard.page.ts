import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardApiService } from './dashboard-api.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  
  @ViewChild('dashCompras') dashCompras;
  
  data: Number[];
  bars: any;
  colorArray: any;
  
  constructor(
    private dashboardApiService: DashboardApiService,
    private messageService: MessageService
    ) {}
    
    ionViewDidEnter(){
      console.log("ionViewDidEnter")
      this.getData();
    }
    
    getData() {
      this.dashboardApiService
      .getData()
      .subscribe(
        (response) => {
          this.data = response;
          this.createBarChart();
        },
        () =>
        this.messageService.error('Erro ao buscar dados do dashboard', () =>
        this.getData()
        )
        );
      }
      
      createBarChart() {
        Chart.register(...registerables);
        
        this.bars = new Chart(this.dashCompras.nativeElement, {
          type: 'line',
          data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            datasets: [{
              label: 'Quantidade de Vendas',
              data: [this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.data[5],
              this.data[6], this.data[7], this.data[8], this.data[9], this.data[10], this.data[11]],
              backgroundColor: 'rgb(38, 194, 129)', 
              borderColor: 'rgb(38, 194, 129)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              ticks: {
                beginAtZero: true
              },
              yAxes: {
                suggestedMax: 10,
                suggestedMin: 0
              }
            }
          }
        });
        
        Chart.register(...registerables);
      }
    }
    