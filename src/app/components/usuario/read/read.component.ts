
import { CPFPipe } from './../../../cpf.pipe';
import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
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
  displayedColumns = ['id', 'email','nome', 'perfil','cpf', 'toggle', 'action']
  constructor(private usuarioService: UsuarioService,private router: Router ) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios=usuarios
      console.log(usuarios)
    })
  }

  updateStatus(element: any): void {
      element.situacao=!element.situacao
      if (element.id != null) {
        this.usuarioService.update(element).subscribe(() =>{
          this.usuarioService.showMessage('Usuário alterado com sucesso!')  
        })      
        this.cancel()
      }
    }

  cancel(): void{
    this.router.navigate(['/usuarios'])
  }
  
}
