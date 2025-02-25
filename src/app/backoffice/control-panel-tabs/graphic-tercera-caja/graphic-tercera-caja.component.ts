import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrls: ['./graphic-tercera-caja.component.scss']
})
export class GraphicTerceraCajaComponent implements OnInit {

  private readonly chartLabels: string[] = ["Label 1", "Label 2", "Label 3", "Label 4"];
  private readonly chartValues: number[] = [20, 90, 40, 50];

  public linearChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true,
        position: 'top'  // 'center' no es válido en Chart.js
      },
      tooltip: {},
      title: {
        display: true,
        text: 'Suggested Min and Max Settings'
      }
    },
    scales: {
      y: {
        suggestedMin: 30,
        suggestedMax: 50
      }
    }
  };

  public linearChartData: {
    labels: string[],
    datasets: ChartDataset<'line'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['red', 'black', 'green', 'yellow'],
      hoverBackgroundColor: ['darkred', 'gray', 'darkgreen', 'goldenrod']
    }]
  };

  public linearChartType: ChartType = 'line';

  ngOnInit(): void {
    this.setChartData();
  }

  private setChartData(): void {
    this.linearChartData.labels = [...this.chartLabels];
    this.linearChartData.datasets[0].data = [...this.chartValues];
  }
}