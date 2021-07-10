import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  validateUser(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/User");
  }
}
