import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product_interface } from '../../data_type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined;
  constructor(private product:ProductService) {}
  submit(data:product_interface){


    console.warn(data);
    this.product.addproduct(data).subscribe((result)=>{
      console.warn(result);
      
      if(result){
        this.addProductMessage="Product is successfully added";
      }
      setTimeout(() => {this.addProductMessage=undefined;
  
        
      }, 3000);
    })
  }

}
