import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TabNotificationComponent } from '../tabs/tab-notification/tab-notification.component';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { SettingsComponent } from '../tabs/settings/settings.component';
import { ProfileComponent } from "../tabs/profile/profile.component";
import { GridComponent } from '../tabs/grid/grid.component';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    SettingsComponent,
    ProfileComponent,
    GridComponent
  ],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrls: ['./header-backoffice.component.scss']
})
export class HeaderBackofficeComponent {

  isActive: boolean = true;

  // Tipado correcto de isActiveItems para evitar 'any'
  isActiveItems: Record<string, boolean> = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveGrid: false
  };

  constructor(private readonly sidebarStatusService: SidebarStatusService) {}

  toggleLogo(): void {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option: keyof typeof this.isActiveItems): void {
    Object.keys(this.isActiveItems).forEach(key => {
      this.isActiveItems[key] = key === option;
    });
  }
}