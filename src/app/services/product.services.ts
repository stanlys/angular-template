import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProducts } from "app/interfaces/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductServices {
  constructor(private http: HttpClient) {}

  getProductAll(): Observable<IProducts[]> {
    return this.http.get<Array<IProducts>>(
      "https://fakestoreapi.com/products",
      { params: new HttpParams({ fromString: "limit=10" }) }
    );
  }
}
