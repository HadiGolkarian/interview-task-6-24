import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.sass',
})
export class NoteCardComponent {
  @Input() note?: Note;
}
