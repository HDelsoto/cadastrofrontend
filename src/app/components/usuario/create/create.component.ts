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
  usuarios: Usuario[] =[];
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
    this.uniqueCpf()
    this.usuarioService.readByCpf(this.usuario.cpf).subscribe(usuario => {
      console.log("retorno unique", Object.keys(usuario).length) 
      if(Object.keys(usuario).length===0) {
        this.usuarioService.create(this.usuario).subscribe(()=>{
        this.usuarioService.showMessage('Cadastro efetuado com sucesso!')
        this.router.navigate(['/usuarios'])})      
        }  
      else {
        this.usuarioService.showMessage('Operação não realizada. Usuário já Incluido´.')
        this.router.navigate(['/usuarios'])
      }  
   }
    )
 }

  uniqueCpf(): void{
      this.usuarioService.readByCpf(this.usuario.cpf).subscribe(usuario => {
         console.log("retorno unique", Object.keys(usuario).length) 
         if(Object.keys(usuario).length===0) console.log("Cpf Unico")
         else console.log("Cpf Duplicado")
      })
    }
    
      
    
  

  cancel(): void{ 
    this.router.navigate(['/usuarios'])
  }
   

}
