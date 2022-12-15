import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';  
import { Observable  } from 'rxjs'; 

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPortfolio=data;
      });     
  }
  }
  