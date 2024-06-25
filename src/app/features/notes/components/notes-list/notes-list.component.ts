import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent, AsyncPipe],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass',
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  notesSubscription?: Subscription;

  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesSubscription = this.notesService.notes$.subscribe(
      (notes) => (this.notes = notes)
    );
  }

  ngOnDestroy(): void {
    this.notesSubscription?.unsubscribe();
  }
}
