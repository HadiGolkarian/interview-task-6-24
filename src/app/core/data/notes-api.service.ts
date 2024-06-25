import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Note } from '../../features/notes/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesApiService {
  private apiUrl = `${environment.apiUrl}/notes`;

  constructor(private http: HttpClient) {}

  getStats(): Observable<{ createdAt: Date; notes: number }[]> {
    return this.http.get<{ createdAt: Date; notes: number }[]>(
      `${this.apiUrl}/stats`
    );
  }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  searchNotes(searchText: string): Observable<Note[]> {
    return this.http.get<Note[]>(
      `${this.apiUrl}/search?searchText=${searchText}`
    );
  }

  createNote(newValues: { title: string; note: string }): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, newValues);
  }

  updateNote(
    note: Note,
    updatedValues: { title: string; note: string }
  ): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, updatedValues);
  }

  deleteNote(note: Note): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${note.id}`);
  }
}
