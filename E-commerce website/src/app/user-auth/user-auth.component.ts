import { Component } from '@angular/core';
import { SignUp, login } from '../data_type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {

  showLogin:boolean=true;
  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.userAuthReloadUrl();
  }

  signUp(data:SignUp){
  
    this.user.userSignUp(data);

  }
  Login(data:login){
    this.user.userLogin(data);
  }
  openSignUp(){
    this.showLogin=false;

  }
  openLogin(){
    this.showLogin=true;

  }

}
