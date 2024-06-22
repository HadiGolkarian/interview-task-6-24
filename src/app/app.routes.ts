import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/notes/pages/note-manager/note-manager.component').then(
        (m) => m.NoteManagerComponent
      ),
  },
];
