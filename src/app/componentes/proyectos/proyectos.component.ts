import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  Proyectos: any;
  constructor(private datosPortfolio:PersonaService) { }

  ngOnInit(): void {
   
  }
  }

