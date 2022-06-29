import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserDataSharingService } from 'src/services/user-data-sharing.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit, OnDestroy {
  users: IUser[] = [
    { age: 24, name: 'pouya', Id: 1 },
    { age: 42, name: 'mahdi', Id: 2 },
    { age: 11, name: 'ali', Id: 3 },
  ];

  selectedUsers: IUser[] = [];
  constructor(private userDataService: UserDataSharingService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.userDataService.updateUserData(this.selectedUsers);
  }
}
