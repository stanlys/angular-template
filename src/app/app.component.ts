import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Hello";
  userName = "Stan";

  constructor(public translate: TranslateService) {}

  test(e: Event) {
    const a = e.target as HTMLInputElement;
    this.userName = a.value;
    console.log(a.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
