import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Banner } from './banner/banner';
import { Calendar } from './calendar/calendar';
import { Search } from './search/search';
import { ConferenceList } from './conference-list/conference-list';
import { Speakers } from './speakers/speakers';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Banner, Calendar, Search, ConferenceList, Speakers, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference-app');
}
