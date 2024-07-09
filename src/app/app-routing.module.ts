import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { UcpComponent } from './ucp/ucp.component'; // Asegúrate de que la ruta es correcta

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'ucp', component: UcpComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' } // Ruta de fallback para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
