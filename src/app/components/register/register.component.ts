import { LoginService } from './../../service/loginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      perfil : ['',[
        Validators.required,
      ]]
    });
  }

  async submit(){
    if(this.formRegister.valid){
      let correo = this.formRegister.get('correo').value;
      let clave = this.formRegister.get('clave').value;
      let perfil = this.formRegister.get('perfil').value;

      this.LoginService.AgregarUsuario(correo,clave).then(()=>{
        this.LoginService.guardarUsuario(new Usuario(correo,clave,perfil));
        this.error = 'Exito';
        setTimeout(()=>{
          this.Cerrar();
        },800);
      }).catch(()=>{
        this.error = 'El usuario ya existe';
      })
    }
  }

  Cerrar(){
    this.router.navigate(['/']);
  }
}
