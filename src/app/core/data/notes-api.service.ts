import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../features/notes/models/note.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesApiService {
  private apiUrl = `${environment.apiUrl}/notes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  deleteNote(note: Note): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${note.id}`);
  }
}
