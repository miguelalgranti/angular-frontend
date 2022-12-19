import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
institucionEd: string = '';
descripcionEd: string = '';
periodoEd: string = '';
imagenEd: string = '';
 
  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const edu = new Educacion(this.institucionEd, this.descripcionEd, this.periodoEd, this.imagenEd);
  this.sEducacion.save(edu).subscribe(
    {next: data=>{
    alert("Experiencia añadida");
    this.router.navigate(['']);
    },
    error: err =>{
      alert("Falló)");
      this.router.navigate(['']);
    }
    }, 
  )
}
}
