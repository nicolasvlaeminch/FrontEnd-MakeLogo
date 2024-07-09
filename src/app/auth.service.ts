import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  loginSuccessful() {
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    // Puedes implementar lógica de cierre de sesión aquí si es necesario
    this.isAuthenticatedSubject.next(false);
  }
}
