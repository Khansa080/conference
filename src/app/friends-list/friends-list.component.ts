import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css',
})
export class FriendsListComponent {
  name = 'Ahmed'; // modifié par les 3 champs en même temps (two-way binding)
  friends = ['Sami', 'Sarra', 'Amine'];
}
