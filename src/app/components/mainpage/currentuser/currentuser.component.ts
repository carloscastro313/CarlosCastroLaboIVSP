import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-currentuser',
  templateUrl: './currentuser.component.html',
  styleUrls: ['./currentuser.component.scss']
})
export class CurrentuserComponent implements OnInit {

  email : string;

  constructor(private _LoginService : LoginService) { }

  ngOnInit(): void {
    let aux : any= this._LoginService.GetSesionActual();
    aux = JSON.parse(aux);
    this.email = aux?.correo;
  }

}
