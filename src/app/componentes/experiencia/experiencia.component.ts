import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';  
import { Observable  } from 'rxjs' 
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
educacionList:any;
experienciaList:any;
miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.educacion;
      this.experienciaList=data.experiencia;
  })
  }

}