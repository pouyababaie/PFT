import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  numberInput!: number;
  dateInput!: Date;
  dropdownInput: string = '';
  items!: SelectItem[];
  textInput!: string;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'item 1', value: 0 },
      { label: 'item 1', value: 1 },
      { label: 'item 1', value: 2 },
      { label: 'item 1', value: 3 },
      { label: 'item 1', value: 4 },
    ];
  }
}
