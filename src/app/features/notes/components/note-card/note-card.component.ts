import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { InputTextAreaComponent } from '../../../../shared/components/input/input-text-area/input-text-area.component';
import { InputTextComponent } from '../../../../shared/components/input/input-text/input-text.component';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [
    CardComponent,
    FontAwesomeModule,
    InputTextComponent,
    InputTextAreaComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.sass',
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note = { id: -1, title: '', note: '', createdAt: new Date() };

  mode: 'view' | 'edit' | 'delete' = 'view';

  faPencil = faPencil;
  faTrash = faTrash;

  updateNoteForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private notesService: NotesService) {}

  ngOnInit(): void {
    this.updateNoteForm = this.fb.group({
      title: [
        this.note.title,
        [Validators.required, Validators.maxLength(255)],
      ],
      note: [this.note?.note, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.mode = 'view';
    this.notesService.updateNote(this.note, this.updateNoteForm.value);
  }

  onDelete(): void {
    this.notesService.deleteNote(this.note);
  }

  handleCancelClick(): void {
    this.mode = 'view';
    this.updateNoteForm.reset({
      title: this.note.title,
      note: this.note.note,
    });
  }
}
