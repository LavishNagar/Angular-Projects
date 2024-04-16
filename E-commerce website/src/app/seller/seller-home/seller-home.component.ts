import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product_interface } from '../../data_type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})

export class SellerHomeComponent {
  constructor(private product:ProductService){}
  productlist:undefined|product_interface[];
  ProductMessage:undefined|string;
  ngOnInit():void{
  this.newProductList();
  }

  delete(id:number){
    console.log("id is :-", id);
    this.product.deleteproduct(id).subscribe((result)=>{
      if(result){
        this.ProductMessage="Product is Deleted";
        this.newProductList();
        
      }
      setTimeout(() => {this.ProductMessage=undefined;
  
        
      }, 3000);
    })

  }
  newProductList(){ this.product.productlist().subscribe((result)=>{
      console.warn(result);
      this.productlist=result;
    })
}

}

