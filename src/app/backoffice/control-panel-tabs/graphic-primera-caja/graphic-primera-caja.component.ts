import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrls: ['./graphic-primera-caja.component.scss']
})
export class GraphicPrimeraCajaComponent implements OnInit {

  private readonly chartLabels: string[] = ["Label 1", "Label 2", "Label 3", "Label 4"];

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'left'
      },
      tooltip: {},
      title: {
        text: "Primer gráfico",
        display: true,
      }
    }
  };

  public doughnutChartData: {
    labels: string[],
    datasets: ChartDataset<'doughnut'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: []
    }]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {
    this.initializeChartData();
  }

  private initializeChartData(): void {
    this.doughnutChartData.labels = [...this.chartLabels];

    this.doughnutChartData.datasets[0].data = [20, 30, 40, 50];
    this.doughnutChartData.datasets[0].backgroundColor = ["red", "black", "green", "yellow"];
    this.doughnutChartData.datasets[0].hoverBackgroundColor = ["darkred", "dimgray", "darkgreen", "goldenrod"];
  }
}
