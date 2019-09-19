import { Component, OnInit} from '@angular/core';

export interface Sorts {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.populateArray();
    this.selectionSort(this.array);
  }
  title = 'Sorting Algorithms Visualization';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true,
    pointBorderWidth: 5,
  }

  sorts: Sorts[] = [
    { value: 'slection-0', viewValue: 'Selection Sort' },
    { value: 'insertion-1', viewValue: 'Insertion Sort' },
    { value: 'shell-2', viewValue: 'Shell Sort' },
    { value: 'quick-2', viewValue: 'Quick Sort' },
    { value: 'merge-2', viewValue: 'Merge Sort' }
  ];

  array = [];
  labels = [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [{
    data: this.array,
  },];
  
  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
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