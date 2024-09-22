import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/models/customer_service/customer-service';
import { CustomerServiceService } from 'src/app/servicios/customer_service/customer-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-lista-serviciocliente',
  templateUrl: './lista-serviciocliente.component.html',
  styleUrls: ['./lista-serviciocliente.component.css']
})
export class ListaServicioclienteComponent implements OnInit {

customerservice : CustomerService[];
  constructor(private customerServicio : CustomerServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerServicios();
    
  }
  private obtenerServicios() {
    this.customerServicio.ServiceByID().subscribe(dato => {
      this.customerservice = dato;
      console.log(dato); 
    })
  }
  verDetallesEmpleado(id:number) {
    this.router.navigate(['detalle-empleado',id]);
  }
  verDetallesCliente(id:number) {
    this.router.navigate(['detalle-cliente',id]);
  }
  actualizarServicio(id:number) {
    this.router.navigate(['actualizar-service',id]);
  }

  eliminarServicio(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar el servicio",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : "Si, eliminalo",
      cancelButtonText : "No, cancelar",
      confirmButtonClass : "btn btn-success",
      cancelButtonClass : "btn btn-danger",
      buttonsStyling : true
    }).then((result) => {
      if (result.value) {
        this.customerServicio.eliminarServicio(id).subscribe(dato => {
          console.log(dato);
          this.obtenerServicios();
          swal(
            'servicio eliminado',
            'El servicio ha sido eliminado con éxito',
            'success'
          )
        });
      }
    })

  }
}
