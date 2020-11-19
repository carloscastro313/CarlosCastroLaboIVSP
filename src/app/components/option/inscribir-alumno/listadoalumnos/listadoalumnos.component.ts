import { MateriasService } from 'src/app/service/MateriasService/materias.service';
import { LoginService } from 'src/app/service/loginService/login.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.scss']
})
export class ListadoalumnosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() retorno = new EventEmitter<boolean>();
  @Input() flag : boolean = true;
  @Input() materia : string;
  displayedColumns : string[] = ['correo','id','añadir'];

  list = Array();
  listAlumnos = Array();
  DataSource = null;

  constructor(private LoginService : LoginService, private MateriasService : MateriasService) {
    this.LoginService.getListado().subscribe(aux =>{
      Object.values(aux).forEach(ele=>{
        if(ele.perfil == "alumno"){
          this.list.push(ele);
        }
      });
      this.MateriasService.getList('/materias/'+this.materia+'/listado').subscribe((aux : any)=>{
        if(aux != null){
          Object.values(aux).forEach(ele=>{
            if(this.list.includes(ele)){
              this.list = this.list.filter(obj => obj.correo != ele);
            }
          });
        }
        this.DataSource = new MatTableDataSource(this.list);
        this.DataSource.paginator = this.paginator;
      });
    });


  }

  ngOnInit(): void {
  }
  agregar(correo : string){
    this.flag = true;

    this.MateriasService.addAlumno('/materias/'+this.materia+'/listado',{correo : correo}).then(()=>{
      this.cerrar();
    })
  }
  cerrar(){
    this.flag = true;
    this.retorno.emit(false);
  }
}
