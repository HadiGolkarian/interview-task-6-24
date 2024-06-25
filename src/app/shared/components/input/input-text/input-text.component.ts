import { NgClass } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.sass',
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  handleInput(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(e: Event) {}
  onTouched() {}

  get control() {
    return this.ngControl.control;
  }
}
