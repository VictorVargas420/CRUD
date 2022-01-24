import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';

//COMPONENTES A UTILIZAR
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {path: '', component:ListUserComponent},
  {path: 'create-user', component:CreateUserComponent},
  {path: 'edit-user/:id', component:CreateUserComponent}, //reutilizaremos el componente CreateUser ya que es similar al de editar
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
