import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove, faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, map, Subject } from 'rxjs';
import { NotesService } from '../../services/notes.service';

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

  private searchText = new Subject<string>();

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.searchText
      .pipe(
        debounceTime(1000),
        map((searchTerm: string) => this.noteService.searchNotes(searchTerm))
      )
      .subscribe((results) => {});
  }

  handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchText.next(target.value);
  }
}
