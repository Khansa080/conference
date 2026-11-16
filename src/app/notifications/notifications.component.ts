import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  notifications = ['Nouvelle conférence : Signals Workshop', 'Votre inscription a été confirmée'];
  show = false;
}
