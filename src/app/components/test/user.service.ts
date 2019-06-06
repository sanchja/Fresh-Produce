import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() { const allUsers = this.http.get(this.apiUrl); }

  // get Methods for users
  getPhotos() {
    alert(this.users[0].name);
  }
  getAllUsers() {
    return this.getAllUsers;
    }
}
