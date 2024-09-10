import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private httpClient: HttpClient) {  }

  listarClientes():Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  getClienteById(id:Number):Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/buscarPorId/${id}`);
  }  
}
