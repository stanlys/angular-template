import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProducts } from "app/interfaces/product";
import { catchError, delay, Observable, tap, throwError } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root",
})
export class ProductServices {
  products: IProducts[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getProductAll(): Observable<IProducts[]> {
    return this.http
      .get<Array<IProducts>>("https://fakestoreapi.com/products", {
        params: new HttpParams({ fromString: "limit=10" }),
      })
      .pipe(
        delay(2000),
        tap((produtcs) => (this.products = produtcs)),
        catchError(this.errorHandler.bind(this))
      );
  }

  createProduct(product: IProducts): Observable<IProducts> {
    return this.http
      .post<IProducts>("https://fakestoreapi.com/products", product)
      .pipe(tap((product) => this.products.push(product)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
