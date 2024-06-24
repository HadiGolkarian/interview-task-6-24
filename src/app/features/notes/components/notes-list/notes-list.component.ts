import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass',
})
export class NotesListComponent {
  @Input() notes: Note[] = [];
}
