import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  @ViewChild('lineChart', { static: false }) el: ElementRef;
  constructor() { }
  chart;
  array: number[];
  labels;
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
            backgroundColor: []
          },
        ]
      },
      options: {
        animation: {
          duration: 0
        },
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
    //this.insertionSort();
  }
  reset() {
    this.populateArray();
    this.chart.data.datasets[0].backgroundColor = []
    this.upDateData();
  }
  upDateData() {
    this.chart.data.datasets[0].data = this.array;
    this.chart.update();
  }
  failureCallback() {
    console.log('failed');
  }
  passed() {
    this.upDateData();
    console.log("passed");
  }
  populateArray() {
    this.array = [];
    this.labels = [];
    for (let index = 0; index < 25; index++) {
      var num = Math.floor(Math.random() * Math.floor(100)) + 1;
      this.array.push(num);
      this.labels.push(index);
    }
  }
  async selectionSort() {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[i]) {
          this.colorChange(i, j, 'green', 'red')
          await this.delay(1);
          this.passed();
          this.exchange(this.array, i, j);
          await this.delay(800);
          this.passed();
          this.colorChange(i, j, 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)' )
          await this.delay(500);
          this.passed();
        }
      }
    }
  }
  async insertionSort() {
    for (let i = 1; i < this.array.length - 1; i++) {
      for (let j = i - 1; j > 0; j--) {
        if (this.array[j] < this.array[j - 1]) {
          this.colorChange(j, j - 1, 'green', 'red')
          await this.delay(1);
          this.passed();
          this.exchange(this.array, j, j - 1);
          await this.delay(800);
          this.passed();
          this.colorChange(j, j - 1, 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)' )
          await this.delay(500);
          this.passed();
        }
      }
    }
  }
  colorChange(i: number, j: number, first_color: string, second_color: string) {
    this.chart.data.datasets[0].backgroundColor[i] = first_color;
    this.chart.data.datasets[0].backgroundColor[j] = second_color;
  }
  exchange(array: number[], i: number, j: number) {
    var temp = array[i];
    array[i] = array[j]
    array[j] = temp;
  }
  delay(t: number) {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(), t);
    });
  }
}