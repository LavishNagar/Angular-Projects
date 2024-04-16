import { Component } from '@angular/core';
import { SellerdataService } from '../services/sellerdata.service';

import { SignUp } from '../data_type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private sellers: SellerdataService) {}
  authError:string='';
  
  ngOnInit(): void {
    this.sellers.reloadSeller();
  }
  showLogin = false;
 
  signUp(data: SignUp) {
    this.sellers.signUpApiCall(data);
   
  }

  login(logindata: SignUp) {
    this.authError="";
    this.sellers.loginApiCall(logindata);
    this.sellers.isLoginError.subscribe((error)=>{
      if(error){
        this.authError="Email or password is not correct!";

      }
    })

  
    
  }

  openlogin() {
    this.showLogin = true;
  }
  opensignup() {
    this.showLogin = false;
  }
}
