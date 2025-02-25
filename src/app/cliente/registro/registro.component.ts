import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  constructor(private router: Router) {}
  
    irAlLogin() {
      this.router.navigate(['/login']);
    }
}
