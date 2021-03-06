import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/products.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, Subscriber } from 'rxjs';
import { ViewCartComponent } from '../view-cart/view-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  // refactored img Url
  imgUrl = 'https://images.pexels.com/photos/';


  productsCollection: AngularFirestoreCollection<Products>;
  products: Observable<Products[]>;

  // Products interface
  public name: any;
  public lastName: string;
  public description: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.productsCollection = this.db.collection('products');
    this.products = this.productsCollection.valueChanges();
  }

  onAddProduct() {
    // Capture input values
    this.name = document.querySelector('input#name');
    this.description = document.querySelector('textarea').value;

    // Add a new document in collection "products"
    this.db.collection('products').add({
      name: this.name.value,
      description: this.description,
    })
    .then(() => {
      console.log('Document successfully written!');
      console.log(this.name.value);
      console.log(this.description);
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  }

}
