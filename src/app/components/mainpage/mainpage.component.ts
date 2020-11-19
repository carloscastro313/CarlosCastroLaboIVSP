import { LoginService } from './../../service/loginService/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  opened: boolean;

  constructor(private LoginService : LoginService,private router : Router) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.LoginService.SignOutSesionActual();
  }


  SideNavBtnAccion(){
    this.opened = false;
  }
}
