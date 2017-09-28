import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user.model';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  private serviceUrl = 'http://localhost:1746/user';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  message: String = '';

  // usuarioLogado: User;

  constructor(private http: Http) { }

  login(userName: string, userPassword: string): Promise<any> {
    return this.http.post(this.serviceUrl + '/login',
    JSON.stringify({userName: userName, UserPassword: userPassword}), { headers: this.headers })
    .toPromise().then(res => {
      // persiste o login do usuario na classe localStorage
      localStorage.setItem('usuarioLogado', JSON.stringify(res.json().data as User));
    })
    .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http
      .post(this.serviceUrl + '/new',
      JSON.stringify({ userName: user.userName, UserEmail: user.userEmail, UserPassword: user.userPassword }), { headers: this.headers })
      .toPromise().then(res => res.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
