import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { TokenService} from 'src/app/service/token.service';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  pro: Proyecto[] = [];
  constructor(private sProyecto: SProyectoService , router: Router, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
    this.isLogged = true;
      } else {
    this.isLogged = false;
      }
      }
      cargarProyecto(): void {
        this.sProyecto.lista().subscribe(
          data => {this.pro = data;})
        
    }
    delete(id?: number){
      if(id != undefined){
        this.sProyecto.delete(id).subscribe(
          { next:data => {
            this.cargarProyecto();
          }, error: err => {
            alert("No se pudo borrar el proyecto");
          }
        }
        )
    }}
    
    
    }
    
