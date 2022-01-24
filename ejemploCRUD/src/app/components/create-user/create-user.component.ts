import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  titulo = 'CREATE USER.';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UserService,
              private aRouter: ActivatedRoute) {
    this.userForm = this.fb.group({
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      equipo: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario() {
    
    const USUARIO: User = {
      apellidoP: this.userForm.get('apellidoP')?.value,
      apellidoM: this.userForm.get('apellidoM')?.value,
      nombre: this.userForm.get('nombre')?.value,
      matricula: this.userForm.get('matricula')?.value,
      equipo: this.userForm.get('equipo')?.value,
    }

    if(this.id !==null){
      //EDITANDO USUARIO
      this._usuarioService.editarProducto(this.id, USUARIO).subscribe(data => {
        this.toastr.info('El usuario fue actualizado con exito!', 'USUARIO ACTUALIZADO!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    
    } else {
      //AGREGAMOS USUARIO
      console.log(USUARIO);
      this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
          this.toastr.success('El usuario fue registrado con exito!', 'USUARIO REGISTRADO!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.userForm.reset();
        })
    }


  }

  esEditar() {
    
    if (this.id !== null) {
      this.titulo = 'EDITAR USUARIO.';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.userForm.setValue({
          apellidoP: data.apellidoP,
          apellidoM: data.apellidoM,
          nombre: data.nombre,
          matricula: data.matricula,
          equipo: data.equipo,
        })
      })
    }
  }
}
