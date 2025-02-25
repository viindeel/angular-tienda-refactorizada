import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderBackofficeComponent } from '../header-backoffice/header-backoffice.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderBackofficeComponent,
    RouterOutlet,
    SidebarComponent
  ],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutBackComponent implements OnInit, OnDestroy {

  isActiveSidebar: boolean = true;
  private statusSubscription!: Subscription;

  constructor(private readonly sidebarStatusService: SidebarStatusService) {}

  ngOnInit(): void {
    this.statusSubscription = this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveSidebar = status;
    });
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe(); // Previene fugas de memoria
  }
}