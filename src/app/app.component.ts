import { Component } from '@angular/core';

// Importa ActivatedRoute y Router en AppComponent para enrutar
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Muestra Chat y Navbar si no estan en /ucp
export class AppComponent {
  title = 'frontend-app';
  // Crea el booleano de activacion de los componentes segun la ruta.
  showComponent: boolean = true;


  // Si es verdadero mostrara el componente dependiendo la ruta.
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/ucp') {
        this.showComponent = false;
      } else {
        this.showComponent = true;
      }
    });
  }
}
