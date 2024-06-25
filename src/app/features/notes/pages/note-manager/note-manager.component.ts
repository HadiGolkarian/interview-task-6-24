import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import { NotesChartComponent } from '../../components/notes-chart/notes-chart.component';
import { NotesListComponent } from '../../components/notes-list/notes-list.component';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { SearchNotesComponent } from '../../components/search-notes/search-notes.component';

@Component({
  selector: 'app-note-manager',
  standalone: true,
  imports: [
    CreateNoteComponent,
    NotesListComponent,
    NotesChartComponent,
    SearchNotesComponent,
    AsyncPipe,
  ],
  templateUrl: './note-manager.component.html',
  styleUrl: './note-manager.component.sass',
})
export class NoteManagerComponent implements OnInit {
  notes$?: Observable<Note[]> = of([]);

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes$ = this.notesService.getNotes();
  }

  reloadNotes(): void {
    this.notes$ = this.notesService.getNotes();
  }
}
