import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service'; // Importa AuthService
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService // Inyecta AuthService
  ) { }

  login() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.loginUser(user).subscribe(
      response => {
        if (response === "Login successful") {
          this.authService.loginSuccessful(); // Notifica que se inició sesión correctamente
          $("#loginModal").modal('hide');
        } else {
          console.log("Unexpected response:", response);
        }
      },
      error => {
        console.error(error);
        this.errorMessage = "Error logging in. Please check your credentials.";
      }
    );
  }
}
