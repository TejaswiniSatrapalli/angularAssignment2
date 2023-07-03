import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  addRegisteredUser(user: { username: string; password: string; email: string; phoneNumber: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
