import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: any = {};
  usuario: User;
  usuarioLogado: User;

  // mini gambiarra de verificador do tipo string porque boolean sempre inicializa como false

  sucessoLogin: String = 'null';

  constructor(
    private router: Router,
    private userService: UserService) { }

  login() {
    this.userService.login(this.model.userName, this.model.userPassword)
    .then(sucess => {
      this.sucessoLogin = 'true';
      location.reload();
      this.router.navigate(['/products']);
    }, error => this.sucessoLogin = 'false');
    // this.usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  }
}
