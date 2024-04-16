import { NgModule } from '@angular/core';
import { NavigationEnd, RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';


console.warn('seller lazyloading works');
const routes: Routes = [
  
  {path:'seller-add-product',component:SellerAddProductComponent},
  {path:'seller-home',component:SellerHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
