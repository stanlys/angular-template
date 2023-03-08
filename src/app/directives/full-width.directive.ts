import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appFullWidth]",
})
export class FullWidthDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.width = "100%";
  }
}
