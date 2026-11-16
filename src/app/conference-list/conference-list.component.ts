import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.component.html',
  styleUrl: './conference-list.component.css',
})
export class ConferenceListComponent {
  search = '';

  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: "Les nouveautés d'Angular 21.",
      date: new Date('2027-11-15'), place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les Signals Angular.',
      date: new Date('2027-11-30'), place: 'Ariana', maxParticipants: 50, nbParticipants: 44 },
    { id: 3, title: 'Web Conference', description: 'Les tendances du développement web moderne.',
      date: new Date('2027-11-20'), place: 'Sousse', maxParticipants: 80, nbParticipants: 80 },
  ];

  /** Conférences à venir dont le titre contient le texte recherché */
  get filtered(): Conference[] {
    const q = this.search.toLowerCase().trim();
    const now = new Date();
    return this.conferences.filter(
      (c) => c.date >= now && c.title.toLowerCase().includes(q));
  }

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  btnClass(c: Conference): string {
    const r = this.remaining(c);
    return r === 0 ? 'red' : r < 10 ? 'orange' : 'green';
  }

  register(c: Conference) {
    if (this.remaining(c) > 0) c.nbParticipants++;
  }
}
