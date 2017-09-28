import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product/product.service';
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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
      .subscribe(product => this.product = product);
  }


}
