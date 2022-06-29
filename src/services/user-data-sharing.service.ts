import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataSharingService {
  private userData = new BehaviorSubject(null);
  private formData = new BehaviorSubject(null);

  currentFormData = this.formData.asObservable();
  currentUserData = this.userData.asObservable();
  constructor() {}

  updateUserData(user: any) {
    this.userData.next(user);
  }

  updateFormData(formValue: any) {
    this.formData.next(formValue);
  }
}
