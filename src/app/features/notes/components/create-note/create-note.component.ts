import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { InputTextAreaComponent } from '../../../../shared/components/input/input-text-area/input-text-area.component';
import { InputTextComponent } from '../../../../shared/components/input/input-text/input-text.component';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardComponent,
    InputTextComponent,
    InputTextAreaComponent,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.sass',
})
export class CreateNoteComponent {
  createNoteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createNoteForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      note: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.createNoteForm);
  }
}
