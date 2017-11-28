import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Wishlist } from './wishlist.model';
import { WishlistService } from './wishlist.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private router: Router,
    private wishlistService: WishlistService, private cartService: CartService) { }

  wishlist: Wishlist;
  messageSucess = 'false';
  message = '';

  getWishlist() {

    this.wishlistService.get().then(wishlist => {
      this.wishlist = wishlist;
      console.log(wishlist.products.length);

      if (wishlist.products.length === 0) {
        this.message = 'Lista de Desejos Vazia';
        console.log(this.message);
      } else {
        this.message = '';
      }
    });

  }

  remove(productId: string) {
    this.wishlistService.remove(productId);
    console.log('produto removido');
    this.messageSucess = 'Produto Removido com sucesso !';

  }

  rmv() {
    if (this.wishlist.products.length === 0) {
      location.reload();
    }
  }

  addToCart(productId: string) {
    this.cartService.add(productId).then(
      sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
      error => { this.message = 'erro';
                console.log('erro'); }) ;
  }

  ngOnInit() {

    this.getWishlist();
  }

}
