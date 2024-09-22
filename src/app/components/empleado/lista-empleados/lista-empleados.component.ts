import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../../servicios/empleado/empleado.service';
import { Empleado} from '../../../models/empleado/empleado'; //se importa la clase empleado
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[]; //se crea el arreglo empleado para enlistar empleados
  constructor(private empleadoServicio : EmpleadoService, private router:Router) { }

  ngOnInit(): void { 
    this.obtenerEmpleados();
    /*
    this.empleados = [{
      "id":1,
      "nombre":"Adrian",
      "apellido":"Perez",
      "email":"memo@gmail.com"
    },
    {
      "id":2,
      "nombre":"Guillermo",
      "apellido":"Rios",
      "email":"guille@gmail.com"
    }];
    */
  }

  //Este metodo manda a llamar al servicio e inicializa el arreglo con los datos
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id:number) {
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar al empleado",
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
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con éxito',
            'success'
          )
        });
      }
    })

  }

  verDetallesEmpleado(id:number) {
    this.router.navigate(['detalle-empleado',id]);
  }
  verDetallesCliente(id:number) {
    this.router.navigate(['detalle-empleado',id]);
  }
}
