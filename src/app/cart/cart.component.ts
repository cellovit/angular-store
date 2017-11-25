import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router,
    private cartService: CartService) { }

  cart: Cart;
  messageSucess = 'false';
  message = '';

  getCart() {

    this.cartService.get().then(cart => {
      this.cart = cart;
      console.log(cart.products.length);

      if (cart.products.length === 0) {
        this.message = 'Carrinho Vazio';
        console.log(this.message);
      }else {
        this.message = '';
      }
    });

  }

  remove(productId: string) {
    this.cartService.remove(productId);
    console.log('produto removido');
    this.messageSucess = 'Produto Removido com sucesso !';

    // this.router.navigate(['/products']);
    // this.router.navigate(['/cart']);
  }

  rmv() {
    if (this.cart.products.length === 0) {
      location.reload();
    }
  }

  ngOnInit() {

    this.getCart();
  }

}
