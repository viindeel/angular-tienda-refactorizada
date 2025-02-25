import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  isActiveMenuHeader: boolean = true;
  private statusSubscription!: Subscription;

  constructor(
    private readonly sidebarStatusService: SidebarStatusService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.statusSubscription = this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    });
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe(); // Previene fugas de memoria
  }

  irAlPerfil(): void {
    this.router.navigate(['/app/perfil']);
  }

  irAlInicio(): void {
    this.router.navigate(['/app/control-panel']);
  }

  irAlLogout(): void {
    this.router.navigate(['/']);
  }
}