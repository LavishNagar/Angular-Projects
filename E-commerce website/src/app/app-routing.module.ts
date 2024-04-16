import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { NoPageComponent } from './no-page/no-page.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
 
  {path:'seller',component:SellerAuthComponent},
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(mod => mod.SellerModule) },


  // {path:'**',component:NoPageComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'details/:productId',component:ProductDetailsComponent},
  {path:'search/:query',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
