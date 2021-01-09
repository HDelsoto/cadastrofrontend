import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  usuario:Usuario={
        nome:'',
        cpf:'',
        email:'',
        telefone:'',
        funcao:'',
        perfil:'',
        situacao:''
  }
  constructor(private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {
    
  }
  createUsuario(): void{
    this.usuarioService.create(this.usuario).subscribe(()=>{
      this.usuarioService.showMessage('Cadastro efetuado com sucesso!')
      this.router.navigate(['/usuarios'])
    })
    
  }

  cancel(): void{ 
    this.router.navigate(['/usuarios'])
  }
   

}
