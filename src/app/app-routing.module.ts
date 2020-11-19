import { InscribirAlumnoComponent } from './components/option/inscribir-alumno/inscribir-alumno.component';
import { AltaMateriaComponent } from './components/option/alta-materia/alta-materia.component';
import { AltaAdminComponent } from './components/option/alta-admin/alta-admin.component';
import { StartpageComponent } from './components/option/startpage/startpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisterComponent } from './components/register/register.component';
import { SessionGuard } from './guard/session.guard';
import { AdminSessionGuard } from './guard/admin-session.guard';

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'register', component : RegisterComponent},
  { path: 'mainpage', component : MainpageComponent, canActivate : [SessionGuard],children : [
    {path: 'start', component : StartpageComponent, pathMatch : 'full'},
    {path: 'altaAdmin', component : AltaAdminComponent, pathMatch : 'full', canActivate : [AdminSessionGuard]},
    {path: 'altaMateria', component : AltaMateriaComponent, pathMatch : 'full', canActivate : [AdminSessionGuard]},
    {path: 'inscribirAlumno', component : InscribirAlumnoComponent, pathMatch : 'full', canActivate : [AdminSessionGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
