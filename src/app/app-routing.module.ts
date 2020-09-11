import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { DetailsComponent } from './components/details/details.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'my-courses', component: MyCoursesComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: 'order', component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
