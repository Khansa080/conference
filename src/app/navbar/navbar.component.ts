import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links = [
    { label: 'Accueil', href: '#top' },
    { label: 'Profil', href: '#profile' },
    { label: 'Conférences', href: '#conferences' },
    { label: 'Amis', href: '#friends' },
    { label: 'Notifications', href: '#notifications' },
    { label: 'Admin', href: '#top' },
  ];
  active = 'Accueil';
}
