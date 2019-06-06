import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../shared/firestore.service';
import { Products} from '../../shared/products.interface';
import { Observable, Subscriber } from 'rxjs';
import { ProductsComponent } from '../products/products.component';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
// import { UserService } from '../test/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

   private apiUrl = 'https://jsonplaceholder.typicode.com/users';
   users: any;

  constructor(
    // private user: UserService
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(data => {
      this.users = data;

    });
  }
  getPhotos() {
    alert(this.users[0].name);
  }
}
