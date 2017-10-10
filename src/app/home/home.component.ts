import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { User } from '../user//user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(
    private router: Router) { }
  usuarioLogado: User;
  usuarioLogadoBool: string;
  nomeUsuario: string;

  ngOnInit(): void {
        if (localStorage.getItem('usuarioLogado') != null) {
      console.log('usuario logado');
      this.usuarioLogadoBool = 'true';
      // this.usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
      // this.usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) as User;
      // console.log('nome usuario' + this.usuarioLogado.userName);
      console.log('nome usuario');
      console.log(localStorage.getItem('nomeUsuarioLogado'));
      this.nomeUsuario = localStorage.getItem('nomeUsuarioLogado');
    }else {
      console.log('usuario nao logado !!!!');
      this.usuarioLogadoBool = 'false';
    }
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuarioLogado');
    location.reload();
    this.router.navigate(['/products']);
  }

}
