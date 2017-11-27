import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';
import { Product } from '../product/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }
  cart: Cart;
  messageSucess = 'false';
  message: string;
  precoTotal = 0;

  getCart() {

    this.cartService.get().then(cart => {
      this.cart = cart;
      this.precoTotal = cart.totalValue;
      console.log(cart.products.length);

      if (cart.products.length === 0) {
        this.message = 'Carrinho Vazio';
      }else {
        this.message = '';
      }
    });
  }

  getTotal() {
    this.cartService.get().then(cart => {
      this.precoTotal = cart.totalValue;

      console.log('total :' + this.precoTotal);

    });
  }

  remove(productId: string) {
    this.cartService.remove(productId);
    console.log('produto removido');
    this.messageSucess = 'Produto Removido com sucesso !';
    // this.router.navigate(['/products']);
    // this.router.navigate(['/cart']);
  }

  finalizarCompra() {

    this.cartService.pay();

    this.router.navigate(['/finish']);

  }

  ngOnInit() {

    this.getCart();
  }
}
