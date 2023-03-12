import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  tap,
} from "rxjs";

// const search$ = new Observable<string>((observer) => {
//   console.log("start in observable");
//   const searchInput = document.getElementById("Search");
//   if (!searchInput) {
//     observer.error("Erron in Observer - Element not found");
//   }
//   searchInput?.addEventListener("input", (event) => {
//     const value = (event.target as HTMLInputElement).value;
//     if (value === "exit") observer.complete();
//     observer.next(value);
//   });
//   // observer.next(1);
//   // observer.next(2);
//   // observer.next(3);
//   // observer.next(4);

//   console.log("end in observable");
// });

const search$ = fromEvent(
  document.getElementById("Search") as HTMLInputElement,
  "input"
);

console.log("start subscribe");
let sum = 0;
search$
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    debounceTime(1000),
    map((value) => (value.length > 3 ? value : "")),
    distinctUntilChanged()
  )
  .subscribe({
    next: (v) => console.log(v),
    error: (err) => console.warn(err),
    complete: () => console.warn("finish"),
  });
console.log("end subsribe  - sum:", sum);
