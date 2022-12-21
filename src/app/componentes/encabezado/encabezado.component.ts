import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from 'src/app/model/persona.model';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
isLogged = false;
Persona: any;
persona: persona = null;
  constructor( private personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  
  
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login']);
  }
       
}

