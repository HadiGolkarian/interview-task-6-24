import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass',
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<any>();
  @Input() disabled = false;
  @Input() type: 'submit' | 'button' = 'submit';

  handleClick() {
    this.onClick.emit();
  }
}
