import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import {Headers, Response} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  products: Product[];
  usuarioLogadoBool: string;
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
    if (localStorage.getItem('usuarioLogado') != null) {
      this.usuarioLogadoBool = 'true';
    }else {
      console.log('usuario nao logado !!!!');
      this.usuarioLogadoBool = 'false';
    }
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/product-detail' + '/' + id]);
  }


}
