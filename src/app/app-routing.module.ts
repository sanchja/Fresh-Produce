import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'view-cart', component: ViewCartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'app-test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
