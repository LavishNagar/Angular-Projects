import { Injectable } from '@angular/core';
import { SignUp, login } from '../data_type';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) {}

  userSignUp(user:SignUp){
    this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })
  }

  userAuthReloadUrl(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }

  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body){
  
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
      }
    })
  }
}
