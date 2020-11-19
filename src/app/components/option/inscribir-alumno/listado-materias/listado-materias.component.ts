import { element } from 'protractor';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MateriasService } from 'src/app/service/MateriasService/materias.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() materia = new EventEmitter<string>();
  @Input() flag : boolean = false;

  public list : any = Array();
  displayedColumns : string[] = ['anio','cuatrimestre','cupo','nombreMateria','profesor','modificar'];
  DataSource = null;

  constructor(private MateriasService : MateriasService,private router : Router) {
      this.MateriasService.getList('/materias/').subscribe((aux : any)=>{
        console.log(aux);
        Object.values(aux).forEach(element=>{
          if(!this.list.includes(element)){
            this.list.push(element);
          }
        })
        console.log(this.list);
        this.DataSource = new MatTableDataSource(this.list);
        this.DataSource.paginator = this.paginator;
      });
  }

  ngOnInit(): void {

  }

  public modificar(nombreMateria : string){
    this.materia.emit(nombreMateria);
  }

}
