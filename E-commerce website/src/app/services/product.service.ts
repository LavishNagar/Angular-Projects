import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product_interface } from '../data_type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addproduct(data:product_interface){
    return this.http.post("http://localhost:3000/products",data);
  }
  productlist(){
    return this.http.get<product_interface[]>('http://localhost:3000/products');
  }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  popularProducts(){
    return this.http.get<product_interface[]>('http://localhost:3000/products?_limit=3');
  }
  getProduct(id:string){
    return this.http.get<product_interface>(`http://localhost:3000/products/${id}`);
  }

  trendyProducts(){
    return this.http.get<product_interface[]>('http://localhost:3000/products?_limit=20');
  }
  searchProducts(query:string){
    return this.http.get<product_interface[]>(`http://localhost:3000/products?name=${query}`);
    
  }


}
