import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  private dataUpdateInterval: any;
  public options: AgChartOptions;
  public optionsk: AgChartOptions;

  constructor(){
    this.options ={}
    this.optionsk={}
  }

  changeValue(){
    this.options = {
      autoSize: true,
      title: {
        text: 'Power (KW)',
      },
      // subtitle: {
      //   text: 'per person per week in Krakozhia',
      // },
      data: [

        {
          time: '12:06:19',
         spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:29',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:39',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:49',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
         time: '12:06:59',
        spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:07:19',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        }

      ],
      series: [
        {
          xKey: 'time',
          yKey: 'spending',
        },

      ],

    };

  }
  changeValueForSecondGraph(){
    this.optionsk = {
      autoSize: true,
      title: {
        text: 'Power Factor',
      },
      // subtitle: {
      //   text: 'per person per week in Krakozhia',
      // },
      data: [

        {
          time: '12:06:19',
         spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:29',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:39',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:49',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
         time: '12:06:59',
        spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:07:19',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        }

      ],
      series: [
        {
          xKey: 'time',
          yKey: 'spending',
        },

      ],

    };

  }
  ngOnDestroy(): void {
    clearInterval(this.dataUpdateInterval);
  }
  ngOnInit(): void {
    this.dataUpdateInterval = setInterval(() => {
      console.log("123456")
      this.changeValue();
      this.changeValueForSecondGraph();
    }, 2000); 
  }
}
