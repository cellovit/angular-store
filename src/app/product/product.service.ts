import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product.model';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ProductService {

    private serviceUrl = 'https://34.208.243.21:5000/product';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        return this.http.get(this.serviceUrl).toPromise().then(response => response.json() as Product[]);
    }

    getProduct(id: string): Promise<Product> {
        return this.http.get(this.serviceUrl + '/' + id).toPromise().then(response => response.json() as Product);
    }

}
