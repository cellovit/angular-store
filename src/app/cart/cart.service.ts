import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cart } from './cart.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../user/user.model';
import { History } from '../history/history.model';


@Injectable()
export class CartService {

    private serviceUrl = 'http://34.208.243.21:5000/cart';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    message: String = '';
    private idUsuarioLogado: string;

    // usuarioLogado: User;

    constructor(private http: Http) { }

    add(productId: string): Promise<any> {

        this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');
        this.idUsuarioLogado = this.idUsuarioLogado.replace('\"', '');

        if (this.idUsuarioLogado !== '') {
            return this.http.post(this.serviceUrl,
                JSON.stringify({ Operation: 'add', UserId: this.idUsuarioLogado, ProductId: productId }), { headers: this.headers })
                .toPromise().then(res => this.message = 'Produto Adicionado com sucesso !');
        }
    }

    remove(productId: string): Promise<any> {

        this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');
        this.idUsuarioLogado = this.idUsuarioLogado.replace('\"', '');

        if (this.idUsuarioLogado !== '') {
            return this.http.post(this.serviceUrl,
                JSON.stringify({ Operation: 'remove', UserId: this.idUsuarioLogado, ProductId: productId }), { headers: this.headers })
                .toPromise().then(res => this.message = 'Produto removido com sucesso !');
        }
    }

    get(): Promise<Cart> {
        this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');

        console.log(this.idUsuarioLogado);
        if (this.idUsuarioLogado !== '') {
            return this.http.get(this.serviceUrl + '/' + this.idUsuarioLogado.replace('\"', ''), { headers: this.headers })
                .toPromise().then(res => res.json() as Cart);
        }
    }

    pay(): Promise<any> {
        this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');
        this.idUsuarioLogado = this.idUsuarioLogado.replace('\"', '');

        if (this.idUsuarioLogado !== '') {
            return this.http.post(this.serviceUrl,
                JSON.stringify({ Operation: 'pay', UserId: this.idUsuarioLogado}), { headers: this.headers })
                .toPromise().then(res => this.message = '');
        }
    }

}




