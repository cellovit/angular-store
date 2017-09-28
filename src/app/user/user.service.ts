import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {

    private serviceUrl = 'http://localhost:1746/user';
}
