import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Post } from './post.model';

@Injectable()
export class PostService {

    private serviceUrl = 'http://jsonplaceholder.typicode.com/posts';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }


    getPosts(): Promise<Post[]> {
        // this.reqOptions.headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(this.serviceUrl).toPromise().then(response => response.json() as Post[]);
    }

    // getProduct(id: string): Promise<Product> {
    //     return this.getProducts()
    //                .then(products => products.find(product => product.id === id));
    // }

    // addProduct() {

    //     const productName = '44656wef4';
    //     const productDescription = '44656wef4';
    //     const productLink = '44656wef4';
    //     const productPriceInCents = 21;
    //     const productCategory = 1;

    //     this.http.post(this.serviceUrl, JSON.stringify({productName: productName}), {headers: this.headers})
    //     .toPromise().then(res => res.json().data as Product);

    // }
}
