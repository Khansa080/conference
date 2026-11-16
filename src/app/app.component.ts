import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, UserProfileComponent, FriendsListComponent,
            NotificationsComponent, ConferenceListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
