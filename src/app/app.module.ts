import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from 'src/environments/environment';


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDqmNQwq7E5lBiUYwNEaMjl-_3SFhAnaVM",
    authDomain: "fresh-produce-8254e.firebaseapp.com",
    databaseURL: "https://fresh-produce-8254e.firebaseio.com",
    projectId: "fresh-produce-8254e",
    storageBucket: "fresh-produce-8254e.appspot.com",
    messagingSenderId: "852117342544"
  };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    ViewCartComponent,
    OrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
