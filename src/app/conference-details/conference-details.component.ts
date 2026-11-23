import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './conference-details.component.html',
  styleUrl: './conference-details.component.css',
})
export class ConferenceDetailsComponent {
  @Input() conference: Conference | null = null;         // parent → enfant
  @Output() registered = new EventEmitter<Conference>(); // enfant → parent

  get remaining(): number {
    return this.conference ? this.conference.maxParticipants - this.conference.nbParticipants : 0;
  }

  onRegister() {
    if (this.conference) this.registered.emit(this.conference);
  }
}
