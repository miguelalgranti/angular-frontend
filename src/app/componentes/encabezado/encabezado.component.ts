import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';  
import { Observable  } from 'rxjs'; 
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
isLogged = false;

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

