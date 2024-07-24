import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Chart, registerables} from 'chart.js/auto';
import { DataModel } from '../model/dataModel';
import { DataService } from '../data.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  data: DataModel[] = [];
  chart:any;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.data = this.dataService.getMockData();
    this.initializeChart();
  }

  initializeChart() {
    const ctx = document.getElementById('MyChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar', // or 'line', 'pie', etc.
      data: {
        labels: this.data.map(d => d.geo),
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: this.data.map(d => d.value)
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Filter data by year and type of data
  //https://www.youtube.com/watch?v=luriv1qW6b8
  //https://github.com/funOfheuristic/chart-filter/blob/master/src/app/app.component.ts

  applyDataFilter(filter: string) {
    const filteredData = this.data.filter(d => d.geo === filter);
    this.chart.data.datasets[0].data = filteredData.map(d => d.value);
    this.chart.update();
  }

  applyTypeFilter(filter: string) {
    this.chart.config.type = filter;
    this.chart.update();
  }




}
