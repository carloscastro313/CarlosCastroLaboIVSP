import { LoginService } from 'src/app/service/loginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister-admin',
  templateUrl: './resgister-admin.component.html',
  styleUrls: ['./resgister-admin.component.scss']
})
export class ResgisterAdminComponent implements OnInit {

  formRegister : FormGroup;
  error : string = '';

  constructor(private fb : FormBuilder, private LoginService : LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      correo : ['', [
        Validators.required,
        Validators.email
      ]],
      clave : ['',[
        Validators.required,
        Validators.minLength(6),
      ]],
    });
  }

  async submit(){
    if(this.formRegister.valid){
      let correo = this.formRegister.get('correo').value;
      let clave = this.formRegister.get('clave').value;
      let perfil = "administrador";

      this.LoginService.AgregarUsuario(correo,clave).then(()=>{
        this.LoginService.guardarUsuario(new Usuario(correo,clave,perfil));
        this.error = 'Exito';
      }).catch(()=>{
        this.error = 'El usuario ya existe';
      })
    }
  }

}
