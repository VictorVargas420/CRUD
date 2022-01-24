import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsuarios: User[] = [];

  constructor(private _usuarioService: UserService,
      private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {//este actualiza? NO OBTIENE LOS DATOS DEL REGISTRO Y TE REDIRIGE A LA API ACTUALIZAR
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarUsuario(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El usuario fue eliminado con exito.', 'USUARIO ELIMINADO!');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }

}
