import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_interface } from '../data_type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
constructor(private product:ProductService){}
popularProducts:undefined|product_interface[];
trendyProducts:undefined|product_interface[];

ngOnInit():void{
  this.product.popularProducts().subscribe((data)=>{
    console.log(data);
    this.popularProducts=data;
  })


this.product.trendyProducts().subscribe((data)=>{
  this.trendyProducts=data;
})


}
}
