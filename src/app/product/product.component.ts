import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { WishlistService } from '../wishlist/wishlist.service';
import { Wishlist } from '../wishlist/wishlist.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private cartService: CartService, private wishlistService: WishlistService) { }

  products: Product[];
  wishlist: Wishlist;
  productWishlist = null;
  usuarioLogadoBool: string;
  message = 'false';
  messageError = 'false';

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  getWishlist(): void {
    this.wishlistService.get().then(wishlist => this.wishlist = wishlist);
  }

  ngOnInit(): void {
    this.getProducts();
    this.getWishlist();

    if (localStorage.getItem('usuarioLogado') != null) {
      console.log(localStorage.getItem('usuarioLogado'));
      this.usuarioLogadoBool = 'true';
    } else {
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
      error => {
        this.message = 'erro';
        console.log('erro');
      });
  }

  addToWishlist(productId: string) {

    // this.wishlistService.get().then(x => this.productWishlist = x.products.find(product => product.id === productId));

    if (this.wishlist.products.find(x => x.id === productId) == null) {
      this.wishlistService.add(productId).then(
        sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
        error => {
          this.message = 'erro';
          console.log('erro');
        });
        // location.reload();
    }else {
      this.messageError = 'Produto já adicionado na lista de desejos';
      console.log('ja adicionado na lista de desejos');
      window.scrollTo(0, 0);
      this.productWishlist = null;
    }

    console.log(this.productWishlist);

    // if (this.productWishlist === null) {
    //   this.wishlistService.add(productId).then(
    //     sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
    //     error => {
    //       this.message = 'erro';
    //       console.log('erro');
    //     });
    // } else {
    //   this.message = 'Produto já adicionado na lista de desejos';
    //   console.log('ja adicionado na lista de desejos');
    //   this.productWishlist = null;
    //   location.reload();
    // }

    // this.wishlistService.add(productId).then(
    //   sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
    //   error => { this.message = 'erro';
    //             console.log('erro'); }) ;
  }


}
