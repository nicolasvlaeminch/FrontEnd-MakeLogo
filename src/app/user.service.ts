import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user, { responseType: 'text' as 'json' });
  }
}
