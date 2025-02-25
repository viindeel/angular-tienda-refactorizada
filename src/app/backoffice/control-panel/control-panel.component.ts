import { Component } from '@angular/core';
import {StatsComponent} from '../control-panel-tabs/stats/stats.component';
import {GraphicsComponent} from '../control-panel-tabs/graphics/graphics.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  imports: [
    StatsComponent,
    GraphicsComponent
  ],
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
  constructor(private router: Router) {}
  
    irAlPerfil() {
      this.router.navigate(['/control-panel']);
    }
}
