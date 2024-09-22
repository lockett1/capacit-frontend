import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/models/customer_service/customer-service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private baseURL = "http://localhost:8080/api/v1/servicios";


  constructor(private httpClient : HttpClient) { }
  
  ServiceByID():Observable<CustomerService[]>{
    return this.httpClient.get<CustomerService[]>(`${this.baseURL}`);
  }
  eliminarServicio(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  actualizarServicio(id:number, customer_service:CustomerService) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, customer_service);
  }
}
