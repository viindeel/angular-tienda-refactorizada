import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrls: ['./graphic-segunda-caja.component.scss']
})
export class GraphicSegundaCajaComponent implements OnInit {

  private readonly chartLabels: string[] = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
  private readonly chartValues: number[] = [10, 20, 30, 40];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };

  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      label: 'Ventas',
      backgroundColor: ['red', 'blue', 'green', 'yellow'],
      hoverBackgroundColor: ['darkred', 'darkblue', 'darkgreen', 'goldenrod']
    }
  ];

  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';

  ngOnInit(): void {
    this.setChartData();
  }

  private setChartData(): void {
    this.barChartLabels = [...this.chartLabels];
    this.barChartData[0].data = [...this.chartValues];
  }
}