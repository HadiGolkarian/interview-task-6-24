import { Component, OnInit } from '@angular/core';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import { NotesChartComponent } from '../../components/notes-chart/notes-chart.component';
import { NotesListComponent } from '../../components/notes-list/notes-list.component';
import { SearchNotesComponent } from '../../components/search-notes/search-notes.component';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-manager',
  standalone: true,
  imports: [
    CreateNoteComponent,
    NotesListComponent,
    NotesChartComponent,
    SearchNotesComponent,
  ],
  templateUrl: './note-manager.component.html',
  styleUrl: './note-manager.component.sass',
})
export class NoteManagerComponent implements OnInit {
  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.loadNotes();
  }
}
