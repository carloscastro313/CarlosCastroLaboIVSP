import { LoginService } from 'src/app/service/loginService/login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.scss']
})
export class CrearMateriaComponent implements OnInit {

  @Output() formDeliver = new EventEmitter<FormGroup>();

  formRegister : FormGroup;
  user : Array<string> = Array();

  constructor(private fb : FormBuilder,private LoginService : LoginService,private router: Router) {
    this.LoginService.getListado().subscribe((aux)=>{
      aux.forEach(element => {
        if(element.perfil == 'profesor'){
          this.user.push(element.correo);
        }
      });
    })
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nombreMateria : ['', [
        Validators.required,
      ]],
      cuatrimestre : ['',[
        Validators.required,
      ]],
      cupo : ['',[
        Validators.required,
      ]],
      anio : ['',[
        Validators.required,
      ]],
      profesor :['',[
        Validators.required,
      ]],
    });
  }

  RetornaOutput(){
    this.formDeliver.emit(this.formRegister);
  }

}
