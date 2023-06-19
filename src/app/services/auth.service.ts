import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signup(user: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/signup`, user)
  }
  signin(user: IAuth): Observable<IAuth> {
    return this.http.post<any>(`http://localhost:3000/signin`, user);

  }

}
