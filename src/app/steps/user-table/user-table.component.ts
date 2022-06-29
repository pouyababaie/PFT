import { Component, OnInit } from '@angular/core';

interface IUser {
  name: string;
  age: number;
  Id: number;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: IUser[] = [
    { age: 24, name: 'pouya', Id: 1 },
    { age: 42, name: 'mahdi', Id: 2 },
    { age: 11, name: 'ali', Id: 3 },
  ];

  selectedUsers: IUser[] = [];
  constructor() {}

  ngOnInit(): void {}

  sendUserData(user: IUser[]) {
    console.log(user);
  }
}
