import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Importa AuthService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // Estado de autenticación

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Suscríbete al estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
    });
  }

  logout() {
    // Puedes implementar lógica de cierre de sesión si es necesario
    this.authService.logout();
  }
}
