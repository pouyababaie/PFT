import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PFT';
  steps!: MenuItem[];
  activeIndex: number = 0;
  ngOnInit() {
    this.steps = [
      {
        label: 'Image Uploader',
        command: (event?) => {
          this.activeIndex = 0;
        },
      },
      {
        label: 'Form',
        command: (event?) => {
          this.activeIndex = 1;
          this.changeSteps(2);
        },
      },
      {
        label: 'User-Table',
        command: (event?) => {
          this.activeIndex = 2;
        },
      },
      {
        label: 'Summery',
        command: (event?) => {
          this.activeIndex = 3;
        },
      },
    ];
  }
  changeSteps(value: number) {
    console.log(this.activeIndex);

    switch (value) {
      case 1:
        this.activeIndex--;

        break;

      case 2:
        this.activeIndex++;
        break;
    }

    console.log(value);
    console.log('active index' + '' + this.activeIndex);
  }
}
