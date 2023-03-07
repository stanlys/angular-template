import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProducts } from "app/interfaces/product";
import { catchError, delay, Observable, throwError } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root",
})
export class ProductServices {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getProductAll(): Observable<IProducts[]> {
    return this.http
      .get<Array<IProducts>>("https://fakestoreapi.com/products", {
        params: new HttpParams({ fromString: "limit=10" }),
      })
      .pipe(delay(2000), catchError(this.errorHandler.bind(this)));
  }

  createProduct(product: IProducts): Observable<IProducts> {
    return this.http.post<IProducts>(
      "https://fakestoreapi.com/products",
      product
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
