import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserDataSharingService } from 'src/services/user-data-sharing.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss'],
})
export class SummeryComponent implements OnInit {
  currentUser: any;
  currentFormData: any;
  constructor(private userDataService: UserDataSharingService) {}

  ngOnInit(): void {
    this.userDataService.currentUserData.subscribe((userData: any[any]) => {
      this.currentUser = userData;
    });
    this.userDataService.currentFormData.subscribe((formValue: any[any]) => {
      this.currentFormData = formValue;
    });
  }
}
