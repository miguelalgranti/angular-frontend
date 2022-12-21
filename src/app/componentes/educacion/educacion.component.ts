import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  Educacion: any;
  educ: Educacion = null;
  constructor(private sEducacion: SEducacionService, private tokenService: TokenService, private activatedRouter: ActivatedRoute, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
if(this.tokenService.getToken()){
this.isLogged = true;
  } else {
this.isLogged = false;
  }
  }
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => {this.edu = data;})
    
}
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sEducacion.update(id, this.educ).subscribe(
    {next: data => {
      this.router.navigate(['']);
    }, error: err =>{
       alert("Error al modificar el item");
       this.router.navigate(['']);
    }}
  )
}

delete(id?: number){
  if(id != undefined){
    this.sEducacion.delete(id).subscribe(
      { next:data => {
        this.cargarEducacion();
      }, error: err => {
        alert("No se pudo borrar la experiencia");
      }
    }
    )
  }
}
}
