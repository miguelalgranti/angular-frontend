import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';  
import { Observable  } from 'rxjs'; 


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  faCoffee =faCoffee;
  logueado = false;

  constructor( private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });     
}
}
