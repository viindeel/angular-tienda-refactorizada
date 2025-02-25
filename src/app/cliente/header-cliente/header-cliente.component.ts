import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent {
  constructor(private router: Router) {}
  
  
    irAlRegistro() {
      this.router.navigate(['/registro']);
    }

    irAlLogin() {
      this.router.navigate(['/login']);
    }

    irAlCarrito() {
      this.router.navigate(['/carrito']);
    }
}
