import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { IForm } from 'src/app/models/form.model';
import { UserDataSharingService } from 'src/services/user-data-sharing.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('alpha') onlyLetterInput!: ElementRef;

  numberInput!: number;
  dateInput!: Date;
  dropdownInput: string = '';
  items!: SelectItem[];
  textInput!: any;

  constructor(private userDataService: UserDataSharingService) {}

  ngOnInit(): void {
    this.items = [
      { label: 'item 1', value: 0 },
      { label: 'item 2', value: 1 },
      { label: 'item 3', value: 2 },
      { label: 'item 4', value: 3 },
      { label: 'item 5', value: 4 },
    ];
  }

  ngOnDestroy(): void {
    this.textInput = this.onlyLetterInput.nativeElement.value;
    let userForm: IForm[] = [
      {
        id: this.numberInput,
        date: this.dateInput,
        item: this.dropdownInput,
        text: this.textInput,
      },
    ];
    this.userDataService.updateFormData(userForm);
  }
}
