import { Component} from '@angular/core';

export interface Sorts {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Sorting Algorithms Visualization';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true,
    pointBorderWidth: 5,
  }

  sorts: Sorts[] = [
    {value: 'slection-0', viewValue: 'Selection Sort'},
    {value: 'insertion-1', viewValue: 'Insertion Sort'},
    {value: 'shell-2', viewValue: 'Shell Sort'},
    {value: 'quick-2', viewValue: 'Quick Sort'},
    {value: 'merge-2', viewValue: 'Merge Sort'}
  ];

  array = [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59, 47, 9, 28, 54, 77, 51, 24]
  labels =  [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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
}