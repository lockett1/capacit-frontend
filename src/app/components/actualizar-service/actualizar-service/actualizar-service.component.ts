import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/models/customer_service/customer-service';
import { CustomerServiceService } from 'src/app/servicios/customer_service/customer-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actualizar-service',
  templateUrl: './actualizar-service.component.html',
  styleUrls: ['./actualizar-service.component.css']
})
export class ActualizarServiceComponent implements OnInit {
  customer_service : CustomerService = new CustomerService;

  constructor(private customerServicio:CustomerServiceService,private router:Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  irALaListaDeServicios() {
    this.router.navigate(['/servicios']);
  }

  actualizarServicio() {
    this.customerServicio.actualizarServicio(this.customer_service.id,this.customer_service).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeServicios();
  }, error => console.log(error));
}  
  onSubmit() {
    this.actualizarServicio();
  }
}
