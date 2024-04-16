import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cursorTo } from 'node:readline';
import { ProductService } from '../services/product.service';
import { product_interface } from '../data_type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private route: Router,private product:ProductService) {}
  menuType: string = 'default';
  sellerName:string='';
  searchResult:undefined|product_interface[];
  userName:string="";
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      // console.log(val);
    
      if (val.url) {
        
        // console.log(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.warn('in seller area!');
          this.menuType = 'sellers';
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore);
            this.sellerName=sellerData.name;
            
          }
        }
        else if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user');
          let userData=userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType='user';
        }
        
        
        else {
          // console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });
  }

  logout(){
    localStorage.removeItem('seller');
    console.log("seller removed successfully");
    
    this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
  
  searchProduct(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      // console.log(element.value);
      this.product.searchProducts(element.value).subscribe((result)=>{
        // console.warn(result);
        
        if(result.length>5){
          result.length=5;
        }
        this.searchResult=result;
        
        
      })
    }
  }

hideSearch(){
  this.searchResult=undefined;
}

submitSearch(val:string){

  
  this.route.navigate([`search/${val}`]);
  val:undefined;
}
redirectToDetails(id:number){
  this.route.navigate(['/details/'+id]);
}



}
