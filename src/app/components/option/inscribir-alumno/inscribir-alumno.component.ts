import { MateriasService } from 'src/app/service/MateriasService/materias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.scss']
})
export class InscribirAlumnoComponent implements OnInit {

  materias : boolean = false;
  alumnos : boolean = true;
  materiaSelect : string;

  constructor() { }

  ngOnInit(): void {
  }
  add(flag : string){
    this.materias = true;
    this.alumnos = false;
    this.materiaSelect = flag;
  }

  agregarAlumno(flag : boolean){
    this.materias = false;
    this.alumnos = true;
  }
}
