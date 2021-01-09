import { CreateComponent } from './components/usuario/create/create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
   path:"",
   component: HomeComponent
  },{
   path:"usuarios",
   component: UsuarioCrudComponent
  },
  {
   path:"usuarios/create",
   component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }