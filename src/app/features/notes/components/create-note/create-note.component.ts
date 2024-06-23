import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.sass',
})
export class CreateNoteComponent implements OnInit {
  createNoteForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createNoteForm = this.fb.group({
      title: [''],
      note: [''],
    });
  }

  onSubmit(): void {
    console.log('submit');
  }
}
