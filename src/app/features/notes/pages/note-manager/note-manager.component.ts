import { Component } from '@angular/core';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import { NotesChartComponent } from '../../components/notes-chart/notes-chart.component';
import { NotesListComponent } from '../../components/notes-list/notes-list.component';

@Component({
  selector: 'app-note-manager',
  standalone: true,
  imports: [CreateNoteComponent, NotesListComponent, NotesChartComponent],
  templateUrl: './note-manager.component.html',
  styleUrl: './note-manager.component.sass',
})
export class NoteManagerComponent {}
