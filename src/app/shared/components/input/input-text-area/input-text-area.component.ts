import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  standalone: true,
  imports: [],
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
}
