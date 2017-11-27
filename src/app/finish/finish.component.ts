import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';


@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private router: Router,
    private cartService: CartService, private productService: ProductService) { }

  cart: Cart;
  product: Product;
  productLink: string;
  messageSucess = 'false';
  message = '';

  ngOnInit() {
    this.getCart();
  }

  getCart() {

    this.cartService.get().then(cart => {
      this.cart = cart;
      console.log(cart.products.length);
    });

  }

  goToProductLink (id: string) {

    this.productService.getProduct(id).then(product => { this.product = product; this.productLink = product.productLink; });

    event.preventDefault();
    event.stopPropagation();
    window.open('http://' + this.productLink, '_blank');
  }

}
