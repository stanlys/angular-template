import { Pipe, PipeTransform } from "@angular/core";
import { IProducts } from "app/interfaces/product";

@Pipe({
  name: "filterProducts",
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProducts[], search: string): IProducts[] {
    if (search.length === 0) return products;
    return products.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
