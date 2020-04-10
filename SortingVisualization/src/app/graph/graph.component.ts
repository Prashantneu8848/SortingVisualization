import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface Sorts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart', { static: false }) el: ElementRef;
  constructor() { }
  chart: Chart;
  array: number[];
  label;
  selected: string;
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
        labels: this.label,
        datasets: [
          {
            data: this.array,
            backgroundColor: []
          },
        ]
      },
      options: {
        animation: {
          duration: 0,
        },
        responsive: true,
        legend: {
          display: false
        },
      }
    });
  }
  
  sort() {
    if (this.selected === "Selection Sort") {
      this.selectionSort();
    } else if (this.selected === "Insertion Sort") {
      this.insertionSort();
    } else if (this.selected === "Shell Sort") {
      this.shellSort();
      console.log(this.array);
    } else if (this.selected === "Merge Sort") {
      this.mergeSort();
    } else if (this.selected === "Quick Sort") {
      this.quickSort();
    }
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
  }

  populateArray() {
    this.array = [];
    this.label = [];
    for (let index = 0; index < 50; index++) {
      var num = Math.floor(Math.random() * Math.floor(100)) + 1;
      this.array.push(num);
      this.label.push(index);
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
          await this.delay(1);
          this.passed();
          this.colorChange(i, j, 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)')
          await this.delay(1);
          this.passed();
        }
      }
    }
  }

  async insertionSort() {
    for (let i = 1; i < this.array.length; i++) {
      for (let j = i; j > 0; j--) {
        if (this.array[j] < this.array[j - 1]) {
          this.colorChange(j, j - 1, 'green', 'red')
          await this.delay(1);
          this.passed();
          this.exchange(this.array, j, j - 1);
          await this.delay(1);
          this.passed();
          this.colorChange(j, j - 1, 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)')
          await this.delay(1);
          this.passed();
        }
      }
    }
  }

  async shellSort() {
    var N = this.array.length;
    var h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        var j = i;
        while (j >= h && (this.array[j] < this.array[j - h])) {
          this.colorChange(j, j - h, 'green', 'red')
          await this.delay(1);
          this.passed();
          this.exchange(this.array, j, j - h);
          await this.delay(1);
          this.passed();
          this.colorChange(j, j - h, 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)')
          await this.delay(1);
          this.passed();
          j -= h;
        }
      }
      h = Math.floor(h / 3);
    }
  }
  async mergeSort() {
    var copy: number[] = [];
  }

  async quickSort() {
    //this.sortForQuick(this.array, 0, this.array.length - 1);
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