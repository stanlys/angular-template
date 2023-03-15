import { Component, forwardRef, HostBinding, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-rating-input",
  templateUrl: "./rating-input.component.html",
  styleUrls: ["./rating-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingInputComponent,
      multi: true,
    },
  ],
})
export class RatingInputComponent implements ControlValueAccessor {
  @Input() disable = false;

  value = 0;
  //private onChange!: Function;
  private onTouched!: Function;
  private onChange = (rating: number) => {};

  // onTouched = () => {};

  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.value = rating;
    this.onChange(this.value);
  }
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
  stars: Array<boolean> = Array(5).fill(false);

  // set value(count: number) {
  //   // this.stars = Array(5).fill(false);
  //   this.stars = this.stars.map((_, i) => i < count);
  // }
  // @Input()
  // get value(): number {
  //   const res = this.stars.reduce((total, starred) => {
  //     return total + (starred ? 1 : 0);
  //   }, 0);
  //   console.log(res);
  //   return res;
  // }

  rate(rating: number) {
    this.onTouched();
    this.onChange(rating);
    this.stars = this.stars.map((_, i) => rating > i);
    this.value = rating;
    console.log(rating);
  }
}
