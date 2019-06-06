import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Products } from '../shared/products.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService implements OnInit {

  productsCollection: AngularFirestoreCollection<Products>;
  products: Observable<Products[]>;

  // Products interface
  name: any;
  lastName: string;
  description: string;

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
