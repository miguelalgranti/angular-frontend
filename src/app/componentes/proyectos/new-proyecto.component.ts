import { Component, OnInit } from '@angular/core';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
nombreP: string = '';
descripcionP: string = '';
fechaP: string = '';
imagenP: string = '';
 
  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const pro = new Proyecto(this.nombreP, this.descripcionP, this.fechaP, this.imagenP);
  this.sProyecto.save(pro).subscribe(
    {next: data=>{
    alert("Proyecto añadida");
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

