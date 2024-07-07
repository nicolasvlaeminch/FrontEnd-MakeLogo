import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  selectedStyle: string = ''; // Variable para almacenar el estilo ingresado por el usuario
  selectedColor: string = ''; // Variable para almacenar el color ingresado por el usuario
  createdLogos: { style: string, color: string }[] = [];

  constructor() { }

  createLogo() {
    if (this.selectedStyle && this.selectedColor) {
      this.createdLogos.push({ style: this.selectedStyle, color: this.selectedColor });
      // Limpiar los campos después de crear el logo si es necesario
      this.selectedStyle = '';
      this.selectedColor = '';
    }
  }
}
