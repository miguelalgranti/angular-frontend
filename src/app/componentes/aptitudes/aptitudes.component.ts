import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';  
import { Observable  } from 'rxjs'; 
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  isLogged = false;
  constructor(private personaService: PersonaService, router: Router, private tokenService: TokenService) { }

    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    };     
  }
  
  