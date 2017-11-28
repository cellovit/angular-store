import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class WishlistService {

  private serviceUrl = 'http://34.208.243.21:5000/wishlist';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  message: String = '';

  // usuarioLogado: User;

  constructor(private http: Http) { }

  login(userName: string, userPassword: string): Promise<any> {
    return this.http.post(this.serviceUrl + '/login',
    JSON.stringify({userName: userName, UserPassword: userPassword}), { headers: this.headers })
    .toPromise().then(res => {
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
