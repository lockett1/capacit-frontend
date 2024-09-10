import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { RequestPedidoDTO} from '../../models/pedido/RequestPedidoDTO'; //se importa la clase pedido
import { ResponsePedidoDTO } from 'src/app/models/pedido/ResponsePedidoDTO';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  //Esta URL obtiene el listado de todos los pedidos en el backend
  private baseURL = "http://localhost:8080/api/v1/pedidos";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDePedidos():Observable<ResponsePedidoDTO[]>{
    return this.httpClient.get<ResponsePedidoDTO[]>(`${this.baseURL}`);
  }

  //Este metodo sirve para obtener los pedidos
  obtenerListaDePedidosPorParams(request: RequestPedidoDTO): Observable<ResponsePedidoDTO[]> {
    return this.httpClient.post<ResponsePedidoDTO[]>(`${this.baseURL}/filtro`, request);
  }
}