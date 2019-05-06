import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ViewCartComponent } from '../view-cart/view-cart.component';
// import { Map } from 'rxjs/operator/map';

interface Products {
  name: string;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productsCollection: AngularFirestoreCollection<Products>;
  products: Observable<Products[]>;

  title: string;
  name: string;
  description: string;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.productsCollection = this.db.collection('products');
    this.products = this.productsCollection.valueChanges();
  }
  onAddProduct() {
    // Capture input values
    this.name = document.querySelector('input').value;
    this.description = document.querySelector('textarea').value;

    // Add a new document in collection "products"
    this.db.collection('products').add({
      name: this.name,
      description: this.description
    })
    .then(() => {
      console.log('Document successfully written!');
      console.log(this.name);
      console.log(this.description);
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  }
}
