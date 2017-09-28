import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // products: Product[];

  // constructor(private productService: ProductService) { }

  // getProducts(): void {
  //   this.productService.getProducts().then(products => this.products = products);
  // }

  ngOnInit(): void {
    // this.getProducts();
  }

}
