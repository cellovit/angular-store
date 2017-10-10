import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Product} from '../product/product.model';

@Injectable()
export class ProductBuscaService {
    constructor(private http: Http) {}
    busca(termo: string): Observable<Product[]> {
        return this.http
                    .get(`http://34.208.243.21:5000/product/${termo}`)
                    .map(response => response.json().data as Product[]);
    }
}
