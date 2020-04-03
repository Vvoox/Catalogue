import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {NewProductComponent} from './new-product/new-product.component';
import {ContactComponent} from './contact/contact.component';
import {ModifyProductComponent} from './modify-product/modify-product.component';


const routes: Routes = [
  {
    path: "product",
    component: ProduitsComponent
  },

  {
    path:"new-product",
    component:NewProductComponent
  },
  {
    path:"",redirectTo:"/product",pathMatch:"full"

  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "modify-product/:id",
    component: ModifyProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
