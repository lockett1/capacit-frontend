import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../servicios/empleado/empleado.service';
import { Empleado } from '../../../models/empleado/empleado';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService,private router:Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEmpleadoPorId(this.rutaActiva.snapshot.params.id);
  }

  private obtenerEmpleadoPorId(id:number) {
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe(dato => {
      this.empleado = dato;
      console.log(this.empleado.nombre);
    });
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }

  actualizarEmpleado() {
    this.empleadoServicio.actualizarEmpleado(this.empleado.id,this.empleado).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeEmpleados();
  }, error => console.log(error));
  }

  onSubmit() {
    this.actualizarEmpleado();
  }

}
