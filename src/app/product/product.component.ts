import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import {Headers, Response} from '@angular/http';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router,
              private cartService: CartService ) { }

  products: Product[];
  usuarioLogadoBool: string;
  message = 'false';

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();

    if (localStorage.getItem('usuarioLogado') != null) {
      console.log(localStorage.getItem('usuarioLogado'));
      this.usuarioLogadoBool = 'true';
    }else {
      console.log('usuario nao logado !!!!');
      this.usuarioLogadoBool = 'false';
    }
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/product-detail' + '/' + id]);
  }

  addToCart(productId: string) {
    this.cartService.add(productId).then(
      sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
      error => { this.message = 'erro';
                console.log('erro'); }) ;
  }


}
