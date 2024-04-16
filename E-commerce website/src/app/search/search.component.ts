import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product_interface } from '../data_type';
import { ProductService } from '../services/product.service';
import { query } from '@angular/animations';
import { StringDecoder } from 'string_decoder';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchResult: undefined | product_interface[];
  changeVar: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let queryvar = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(queryvar);
    

    queryvar &&
      this.product.searchProducts(queryvar).subscribe((result) => {
        if (result.length >= 1) {
          this.searchResult = result;
          this.changeVar = 'check';
        } else {
          console.warn('in not check variable');
          this.changeVar = 'notcheck';
          this.searchResult = undefined;
        }
      });
  }
}
