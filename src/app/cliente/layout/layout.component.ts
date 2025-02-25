import { Component } from '@angular/core';
import {HeaderClienteComponent} from '../header-cliente/header-cliente.component';
import {RouterOutlet} from '@angular/router';
import { ProfileSelectedComponent } from "../../backoffice/tabs/profile/profile-selected/profile-selected.component";
import { SidebarComponent } from "../../backoffice/sidebar/sidebar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [
    HeaderClienteComponent,
    RouterOutlet,
    ProfileSelectedComponent,
    SidebarComponent,
    FooterComponent
],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
