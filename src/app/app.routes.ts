import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { InicioComponent } from './pages/inicio/inicio.component';



export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'compras', component: ComprasComponent
    },
    {
        path: 'clientes', component: ClientesComponent
    },
    {
        path: 'facturas', component: FacturasComponent
    },
    {
        path: 'historial', component: HistorialComponent
    },
    {
        path:'inventario', component: InventarioComponent
    },
    {
        path: 'proveedores', component: ProveedoresComponent
    },
    {
        path:'reportes', component: ReportesComponent
    },
    {
        path: 'ventas', component: VentasComponent
    },
    {
        path: 'inicio', component: InicioComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }


];
