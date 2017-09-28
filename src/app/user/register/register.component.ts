import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  sucessoCadastro = '';
  model: any = {};
  message: String = '';
  errorMessage: String;
  sucessMessage: String;

  constructor(
    private router: Router,
    private userService: UserService) { }

    register() {
      this.userService.create(this.model).then(
        sucess => {
          this.sucessoCadastro = 'true';
      }, error => {
          this.sucessoCadastro = 'false';
      });
    }

}
