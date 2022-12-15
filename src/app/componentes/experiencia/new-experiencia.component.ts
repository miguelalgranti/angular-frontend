import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
institucionE: string = '';
descripcionE: string = '';
periodoE: string = '';
imagenE: string = '';
 
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const expe = new Experiencia(this.institucionE, this.descripcionE, this.periodoE, this.imagenE);
  this.sExperiencia.save(expe).subscribe(
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
