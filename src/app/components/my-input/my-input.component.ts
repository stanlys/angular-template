import { Component, forwardRef, Input } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { provideRouter } from "@angular/router";

@Component({
  selector: "app-my-input",
  templateUrl: "./my-input.component.html",
  styleUrls: ["./my-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true,
    },
  ],
})
export class MyInputComponent implements ControlValueAccessor {
  disabled = false;

  private _value = "";

  startControl = new FormControl();

  get value() {
    return this._value;
  }

  @Input()
  title!: string;

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(obj: any): void {
    this._value = obj;
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

  up() {
    this._value = this._value + "1";
  }

  down() {
    this._value = " ";
  }

}
