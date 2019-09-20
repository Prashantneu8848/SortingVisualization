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
    this.selectionSort();
  }

  upDateData() {
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data = this.array;
    });
    this.chart.update();
  }

  populateArray() {
    for (let index = 0; index < 5; index++) {
      var num = Math.floor(Math.random() * Math.floor(100)) + 1;
      this.array.push(num);
      this.labels.push(index);
    }
  }

  selectionSort() {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] > this.array[i]) {
          this.exchange(this.array, j, i);
          this.upDateData();
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