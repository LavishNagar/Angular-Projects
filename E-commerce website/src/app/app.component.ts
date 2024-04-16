import { Component } from '@angular/core';
import { SellerdataService } from './services/sellerdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  constructor(private seller:SellerdataService){}
  
 
 

}
