import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-notes',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-notes.component.html',
  styleUrl: './search-notes.component.sass',
})
export class SearchNotesComponent {
  faSearch = faSearch;
  faRemove = faRemove;
}
