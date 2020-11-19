import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error : string = "";
  correo :string = '';
  clave : string = '';
  flag : boolean = false;

  formLogin : FormGroup;

  constructor(
    public loginService : LoginService,
    public router : Router,
    private fb : FormBuilder) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo : ['',[
        Validators.required,
      ]],
      clave : ['',[
        Validators.required,
      ]]
    })
  }

  Login(){
    this.error =' ';
    if(this.formLogin.valid){
      let correo = this.formLogin.get('correo').value;
      let clave = this.formLogin.get('clave').value;
      this.loginService.SignIn(correo,clave)
      .then(()=>{
        this.loginService.SetSesionActual(correo);
        this.router.navigate(['mainpage']);
      }).catch(aux=>{
        this.error ='No existe usuario';
      })
    }
  }

  Register(){
    this.router.navigate(['register']);
  }
}
