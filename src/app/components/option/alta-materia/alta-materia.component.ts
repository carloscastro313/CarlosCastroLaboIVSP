import { MateriasService } from './../../../service/MateriasService/materias.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.scss']
})
export class AltaMateriaComponent implements OnInit {

  flag : boolean;

  error : string = '';
  constructor(private MateriasService : MateriasService) { }

  ngOnInit(): void {
  }

  Add(form : FormGroup){
    this.flag = true;
    if(form.valid){

      let nombreMateria = form.get('nombreMateria').value;
      let cuatrimestre = form.get('cuatrimestre').value;
      let cupo = form.get('cupo').value;
      let anio = form.get('anio').value;
      let profesor = form.get('profesor').value;
      this.MateriasService.existElement('/materias/'+nombreMateria+'/nombreMateria').subscribe((aux : any)=>{
        if(this.flag){
          if(aux != nombreMateria){
            this.flag = false;
            this.MateriasService.addElemento('/materias/'+nombreMateria,
            {
              nombreMateria : nombreMateria,
              cuatrimestre : cuatrimestre,
              cupo : cupo,
              anio : anio,
              profesor : profesor,
            }).then(()=>{
              this.error = 'Se a añadido '+nombreMateria+'a materias';
            });
          }else{
            this.error = nombreMateria+"ya existe como materia";
          }
        }
      });
    }
  }
}
