import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesApiService } from '../../../core/data/notes-api.service';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  private statsSubject = new BehaviorSubject<
    { createdAt: Date; notes: number }[]
  >([]);
  notes$ = this.notesSubject.asObservable();
  stats$ = this.statsSubject.asObservable();

  constructor(private notesApiService: NotesApiService) {}

  loadNotes() {
    this.notesApiService.getAll().subscribe((notes: Note[]) => {
      this.notesSubject.next(notes);
    });
  }

  searchNotes(searchText: string) {
    this.notesApiService.searchNotes(searchText).subscribe((notes: Note[]) => {
      this.notesSubject.next(notes);
    });
  }

  loadStats() {
    this.notesApiService.getStats().subscribe((stats) => {
      this.statsSubject.next(stats);
    });
  }

  createNote(newValues: { title: string; note: string }) {
    this.notesApiService.createNote(newValues).subscribe((note) => {
      const currentNotes = this.notesSubject.getValue();
      this.notesSubject.next([note, ...currentNotes]);
      this.loadStats();
    });
  }

  updateNote(note: Note, updatedValues: { title: string; note: string }) {
    this.notesApiService.updateNote(note, updatedValues).subscribe((note) => {
      const currentNotes = this.notesSubject.getValue();
      const updatedNoteIndex = currentNotes.findIndex((n) => n.id === note.id);

      if (updatedNoteIndex >= 0) {
        currentNotes[updatedNoteIndex] = note;
        this.notesSubject.next(currentNotes);
      }
    });
  }

  deleteNote(note: Note) {
    this.notesApiService.deleteNote(note).subscribe(() => {
      const currentNotes = this.notesSubject.getValue();
      const updatedNotesList = currentNotes.filter((n) => n.id !== note.id);

      this.notesSubject.next(updatedNotesList);
      this.loadStats();
    });
  }
}
