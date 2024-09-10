import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente/cliente';
import { ClienteService } from '../../../servicios/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes : Cliente[];

  constructor(private clientService : ClienteService, private router : Router) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.clientService.listarClientes().subscribe(dato => {
      this.clientes = dato;
      console.log(dato);
    });
  }

  showActualizar(id:number) {
    this.router.navigate(['actualizar-cliente',id]);
  }
}
