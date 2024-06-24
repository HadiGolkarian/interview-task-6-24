import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesApiService } from '../../../core/data/notes-api.service';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private notesApiService: NotesApiService) {}

  getNotes(): Observable<Note[]> {
    return this.notesApiService.getAll();
  }
}
