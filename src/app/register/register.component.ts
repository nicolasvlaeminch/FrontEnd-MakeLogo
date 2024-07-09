import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AuthService } from '../auth.service'; // Importa AuthService

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService // Inyecta AuthService
  ) { }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user: User = {
      email: this.email,
      password: this.password
    };

    this.userService.registerUser(user).subscribe(
      response => {
        // Lógica adicional después de registrar el usuario
        this.authService.loginSuccessful(); // Notifica que se inició sesión correctamente
        $("#registerModal").modal('hide');
      },
      error => {
        console.error(error);
        alert("Error registering user.");
      }
    );
  }
}