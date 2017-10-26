import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cart: Cart;
  messageSucess = 'false';
  message: string;

  getCart() {

    this.cartService.get().then(cart => {
      this.cart = cart;
      console.log(cart.products.length);

      if (cart.products.length === 0) {
        this.message = 'Carrinho Vazio';
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

  finalizarCompra() {

    this.cart.products.forEach(element => {
      window.location.href = element.productLink;
    });

  }

  ngOnInit() {

    this.getCart();
  }
}
