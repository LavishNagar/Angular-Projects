import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product_interface } from '../data_type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  productData:undefined|product_interface;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){}

ngOnInit():void{

  let productId=this.activeRoute.snapshot.paramMap.get('productId');
  productId && this.product.getProduct(productId).subscribe((result)=>{
    console.warn(result);
    this.productData=result;
  })
}
count:number=1;
change(type:string){

  if(type==='add' && this.count<20){
    this.count+=1;
   
  }
  else if(this.count==20){
    this.count=20;
  }
  else if(this.count>1 && type==='minus'){
   
    this.count-=1;
  
}}


}
