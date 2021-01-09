import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {
    
  }
  createUsuario(): void{
    this.usuarioService.showMessage('Cadastro efetuado com sucesso!')
  }

  cancel(): void{ 
    this.router.navigate(['/usuarios'])
  }

}
