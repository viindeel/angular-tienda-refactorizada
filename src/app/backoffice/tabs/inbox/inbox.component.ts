import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inbox',
  imports: [RouterLink],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  constructor(private router: Router) {}

  irAlInbox() {
    this.router.navigate(['/app/inbox']);
  }

}
