import { HttpClient, provideHttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SignUp, login } from '../data_type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class SellerdataService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);// slesh path likhne pr bhi show nahi hona chayie
  isLoginError=new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  url = 'http://localhost:3000/sellerfile';

  loginApiCall(data:login){
    console.warn(data);
    //api call will be there
    this.http.get(`http://localhost:3000/sellerfile?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
        console.warn("user loged in")
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller/seller-home']);
        

      }
      else{
        
        console.warn("login failed");
        this.isLoginError.emit(true);
      }
      
    })


  }

  signUpApiCall(data: SignUp) {
    let result = this.http
    .post(this.url, data, {observe: 'response'})
    .subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      
      this.router.navigate(['seller/seller-home']);
      
      console.warn('result', result);
    });
    
  }


  reloadSeller() {    
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller/seller-home']);

    }
  }
}
