import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private list = Array();

  constructor(private dbFire: AngularFireDatabase, private firestorage : AngularFireStorage) {
    this.dbFire.list('/materias/').valueChanges().subscribe((aux : any)=>{
      this.list = aux;
    })
  }

  public getList(path : string){
    return this.dbFire.object(path).valueChanges();
  }

  public existElement(path : string,){

    return this.dbFire.object(path).valueChanges();
  }

  public addElemento(path : string, element : any){
    return this.dbFire.object(path).set({
      nombreMateria : element.nombreMateria,
      cuatrimestre : element.cuatrimestre,
      cupo : element.cupo,
      anio : element.anio,
      profesor : element.profesor,
    });
  }

  public modElement(path : string, element : any){
    return this.dbFire.object(path).update({
      nombreMateria : element.nombreMateria,
      cuatrimestre : element.cuatrimestre,
      cupo : element.cupo,
      anio : element.anio,
      profesor : element.profesor,
    })
  }

  public addAlumno(path : string, element : any){
    return this.dbFire.object(path).set({
      correo : element.correo,
    });
  }

  public eraseElement(path : string){
    return this.dbFire.object(path).remove();
  }

}

