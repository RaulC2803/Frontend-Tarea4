import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistarBodegaComponent } from './registar-bodega/registar-bodega.component';


const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'registrarUsuario', component:RegistrarUsuarioComponent},
  {path: 'loginUsuario', component:LoginUsuarioComponent},
  {path: 'registrarCliente', component:RegistrarClienteComponent},
  {path: 'regitrarBodega', component:RegistarBodegaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
