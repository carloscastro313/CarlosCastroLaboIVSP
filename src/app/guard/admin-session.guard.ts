import { LoginService } from 'src/app/service/loginService/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSessionGuard implements CanActivate {
  constructor(private LoginService : LoginService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let aux = JSON.parse(this.LoginService.GetSesionActual());
    if(aux?.perfil == 'administrador'){
      return true;
    }else{
      this.router.navigate(['mainpage/start']);
      return false;
    }
  }
}
