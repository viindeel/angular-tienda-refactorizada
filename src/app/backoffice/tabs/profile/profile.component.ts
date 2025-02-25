import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private router: Router) {}

  irAlPerfil() {
    this.router.navigate(['/app/perfil']);
  }

  irAlLogout() {
    this.router.navigate(['/']);
  }
  
  irAlInbox() {
    this.router.navigate(['/app/inbox']);
  }
}
