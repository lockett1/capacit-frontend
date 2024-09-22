import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/empleado/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './components/empleado/detalle-empleado/detalle-empleado.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarPedidosComponent } from './components/pedido/listar-pedidos/listar-pedidos.component';
import { ListarCustomersComponent } from './components/customers/listar-customers/listar-customers.component';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { ListaServicioclienteComponent } from './components/customer_service/lista-serviciocliente/lista-serviciocliente.component';
import { ActualizarServiceComponent } from './components/actualizar-service/actualizar-service/actualizar-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    DetalleEmpleadoComponent,
    ListarClientesComponent,
    ActualizarClienteComponent,
    ListarPedidosComponent,
    ListarCustomersComponent,
    ProductoComponent,
    ListaServicioclienteComponent,
    ActualizarServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //se importa modulo para peticiones HTTP
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
