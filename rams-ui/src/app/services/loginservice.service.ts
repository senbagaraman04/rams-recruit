import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../shared/Entity/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.URL;
  constructor(private http: HttpClient) { }


  public authenticateUser(loginData: Login) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get(this.url + "/login"+ JSON.stringify(loginData));
  }


}
