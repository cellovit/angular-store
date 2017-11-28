import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { History } from './history.model';


@Injectable()
export class HistoryService {

    private serviceUrl = 'http://34.208.243.21:5000/history';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private idUsuarioLogado: string;

    constructor(private http: Http) { }

    get(): Promise<History[]> {
        this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');

        console.log(this.idUsuarioLogado);
        if (this.idUsuarioLogado !== '') {
            return this.http.get(this.serviceUrl + '/' + this.idUsuarioLogado.replace('\"', ''), { headers: this.headers })
                .toPromise().then(res => res.json() as History[]);
        }
    }

    // getById(id: string): Promise<History> {
    //     this.idUsuarioLogado = localStorage.getItem('usuarioLogado').replace('\"', '');

    //     console.log(this.idUsuarioLogado);
    //     if (this.idUsuarioLogado !== '') {
    //         return this.http.get(this.serviceUrl + '/' + this.idUsuarioLogado.replace('\"', ''), { headers: this.headers })
    //             .toPromise().then(res => res.json() as History) ;
    //     }
    // }

    // getById(id: string): Promise<History> {
    //     return this.get().then(x => x.find(y => y.id === id));
    // }
}
