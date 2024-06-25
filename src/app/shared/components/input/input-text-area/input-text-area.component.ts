import { NgClass } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.sass',
})
export class InputTextAreaComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';

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

  get isRequired(): boolean {
    const control = this.ngControl.control;
    if (!control || !control.validator) {
      return false;
    }

    const validator = control.validator({} as any);
    return validator && validator['required'];
  }
}
