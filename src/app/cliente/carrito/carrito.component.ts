import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  constructor(private router: Router) {}
  irAlCarrito() {
    this.router.navigate(['/carrito']);
  }
}
