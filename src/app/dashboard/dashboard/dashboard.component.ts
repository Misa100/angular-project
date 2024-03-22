import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        align: 'center',
        labels: {
          usePointStyle: true,
        }
      }
    }
  };
  pieChartType: ChartType = 'pie';
  pieChartData: ChartConfiguration['data'] = {
    // labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
      data: [300, 500, 100],
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
      hoverBackgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
    }]
  };
  
  // Pour le graphique linéaire - Ventes quotidiennes
  lineChartType: ChartType = 'line';

  lineChartDataLinear: ChartData<'line'> = {
    datasets: [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Sales',
      backgroundColor: '#9BC0DC',
      borderColor: '#9BC0DC',
      pointBackgroundColor: '#9BC0DC',
      fill: false,
      tension: 0.1
    }],
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul']
  };
  lineChartTypeLinear = 'line';

  // Pour le graphique en barres - Revenus mensuels
  barChartData: ChartData<'bar'> = {
    datasets: [{
      data: [45, 37, 60, 70, 46, 33],
      label: 'Revenue',
      borderColor: '#9BC0DC',
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
    }],
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
  };

  // Pour simuler un graphique exponentiel - Croissance annuelle
  exponentialChartData: ChartData<'line'> = {
    datasets: [{
      data: this.generateExponentialData(3, 7),
      label: 'Growth',
      backgroundColor: '#9BC0DC',
      borderColor: '#9BC0DC',
      pointBackgroundColor: '#9BC0DC',
      fill: false,
      tension: 0.1
    }],
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  };

  chartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  chartLegend = true;

  constructor() { }

  ngOnInit(): void {
      
  }

  generateExponentialData(base: number, length: number): number[] {
    return Array.from({ length }, (_, i) => Math.pow(base, i));
  }
}
