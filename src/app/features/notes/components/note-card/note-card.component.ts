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

  constructor(private fb: FormBuilder) {}

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
    console.log(this.updateNoteForm);
  }

  onDelete(): void {
    console.log(this.updateNoteForm);
  }
}
