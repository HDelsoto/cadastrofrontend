import { CPFPipe } from './../../../cpf.pipe';
import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  usuarios: Usuario[] =[];
  displayedColumns = ['id', 'email','nome', 'perfil','cpf', 'action']
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios=usuarios
      console.log(usuarios)
    })
  }

}
