import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
  ) { }
  message = 'false';
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
      .subscribe(product => this.product = product);
  }
  addToCart(productId: string) {
    this.cartService.add(productId).then(
      sucess => { window.scrollTo(0, 0); this.message = 'Produto Adicionado com sucesso !'; console.log('s'); },
      error => {
      this.message = 'erro';
        console.log('erro');
      });
  }

  // sendMail(target: string, productId: string) {
  //   var email = require('../../../node_modules/emailjs/email');
  //   var server = email.server.connect({
  //     user: "templatestoregpms",
  //     password: "bruxafilhadaputa",
  //     host: "smtp.gmail.com",
  //     ssl: true
  //   });

  //   server.send({
  //     text: "http://localhost:4200/product-detail/" + productId,
  //     from: "Template Store <templatestoregpms@gmail.com>",
  //     to: target,
  //     subject: "teste"
  //   })
  // }

}
