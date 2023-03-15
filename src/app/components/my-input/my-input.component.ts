import { Component, forwardRef, HostListener, Input } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-my-input",
  templateUrl: "./my-input.component.html",
  styleUrls: ["./my-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MyInputComponent,
      multi: true,
    },
  ],
})
export class MyInputComponent implements ControlValueAccessor {
  @Input()
  title!: string;

  @Input()
  buttonCaption!: string;

  field = "";

  @Input()
  disable = false;

  formValue = new FormControl<string>("");

  private onTouched = () => {};

  private onChange: (value: string) => void = () => {};

  set value(val: string) {
    this.field = val;
    this.onChange(val);
    this.onTouched();
  }
  @Input()
  get value() {
    return this.field;
  }

  writeValue(newValue: string): void {
    this.value = newValue;
  }
  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  printToConsole() {
    console.log("Print to console:", this.field);
  }
}
