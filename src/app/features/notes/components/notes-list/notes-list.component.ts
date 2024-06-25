import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  handleNoteDelete(note: Note) {
    this.onDelete.emit(note);
  }

  handleNoteUpdate(note: Note) {
    this.onUpdate.emit(note);
  }
}
