import { Component, OnInit, ViewChild, Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface Sorts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart', {static: false}) el:ElementRef;
  constructor() { }
  chart;
  array = [];
  labels = [];
  title = 'Sorting Algorithms Visualization';

  ngOnInit(): void {
    this.populateArray();
  }

  ngAfterViewInit() {
    this.chartit();
  }

  chartit() {
    let htmlRef = this.el.nativeElement;
    this.chart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.array,
            borderColor: "#3cba9f",
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
  sorts: Sorts[] = [
    { value: 'slection-0', viewValue: 'Selection Sort' },
    { value: 'insertion-1', viewValue: 'Insertion Sort' },
    { value: 'shell-2', viewValue: 'Shell Sort' },
    { value: 'quick-2', viewValue: 'Quick Sort' },
    { value: 'merge-2', viewValue: 'Merge Sort' }
  ];

  sort() {
    this.selectionSort(this.array);
  }

  populateArray() {
    for (let index = 0; index < 100; index++) {
      var num = Math.floor(Math.random() * Math.floor(10000)) + 1;
      this.array.push(num);
      this.labels.push(index);
    }
  }

  selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[i]) {
          this.exchange(array, j, i);
          this.chart.update();
        }
      }
    }
  }

  exchange(array, i: number, j: number) {
    var temp = array[i];
    array[i] = array[j]
    array[j] = temp;
  }
}