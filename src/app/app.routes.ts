import { Routes } from '@angular/router';

import { LayoutComponent } from './cliente/layout/layout.component';
import { LayoutBackComponent } from './backoffice/layout/layout.component';

import { LoginComponent } from './cliente/login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { TiendaComponent } from './cliente/tienda/tienda.component';
import { ControlPanelComponent } from './backoffice/control-panel/control-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileSelectedComponent } from './backoffice/tabs/profile/profile-selected/profile-selected.component';
import { LogoutComponent } from './backoffice/logout/logout.component';
import { HomeComponent } from './cliente/home/home.component';
import { InboxComponent } from './backoffice/tabs/inbox/inbox.component';
import { CarritoComponent } from './cliente/carrito/carrito.component';

export const routes: Routes = [
  // Rutas para el cliente (layout con header del cliente)
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'tienda', component: TiendaComponent },
    ]
  },

  // Rutas para el backoffice (layout con header del backoffice)
  {
    path: 'app', 
    component: LayoutBackComponent, 
    children: [
      { path: '', redirectTo: 'control-panel', pathMatch: 'full' },
      { path: 'control-panel', component: ControlPanelComponent },
      { path: 'perfil', component: ProfileSelectedComponent },  // Aquí se carga el perfil
      {path: 'inbox', component: InboxComponent},
    ]
  },

  // Ruta 404
  { path: '**', component: PageNotFoundComponent },
];