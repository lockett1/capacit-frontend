import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPedidoDTO } from 'src/app/models/pedido/RequestPedidoDTO';
import { ResponsePedidoDTO } from 'src/app/models/pedido/ResponsePedidoDTO';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {

  pedidos : ResponsePedidoDTO[];
  filtro : RequestPedidoDTO;

  constructor(private pedidoService : PedidoService, private router : Router) { }

  ngOnInit(): void {
    this.filtro = new RequestPedidoDTO();
  }

  filtrarPedidos() {
    if (this.filtro.fecha != null) {
      this.filtro.fecha = formatDate(this.filtro.fecha, 'dd/MM/yyyy', 'en-US');
    }
    this.pedidoService.obtenerListaDePedidosPorParams(this.filtro).subscribe(dato => {
      this.pedidos = dato;
      console.log(dato);
    });
  }
}
