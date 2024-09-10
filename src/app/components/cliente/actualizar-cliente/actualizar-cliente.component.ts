import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClienteService } from '../../../servicios/cliente/cliente.service';
import { Cliente } from '../../../models/cliente/cliente';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  cliente : Cliente = new Cliente();
  constructor(private clienteService : ClienteService, private router : Router, private parametro : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCliente(this.parametro.snapshot.params.id);
  }

  loadCliente(id:number) {
    this.clienteService.getClienteById(id).subscribe(dato => {
      this.cliente = dato;
      console.log("Cliente" + this.cliente);
    });
  }

  actualizarCliente() {
    
    this.router.navigate(['listar-clientes']);
  }

  onSubmit() {

  }

}
