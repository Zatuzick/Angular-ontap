import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListProductComponent } from './pages/list-product/list-product.component';

import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: "", component: ListProductComponent
  },
  {
    path: "add", component: AddProductComponent
  }
  ,
  {
    path: "update/:id", component: UpdateProductComponent
  }
  ,
  {
    path: "signin", component: SigninComponent
  }
  ,
  {
    path: "signup", component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
