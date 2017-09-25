import { Component, OnInit } from '@angular/core';
import { Product } from './product/product.model';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {

  title = 'app';

}
