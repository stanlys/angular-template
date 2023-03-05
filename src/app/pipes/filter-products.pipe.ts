import { Pipe, PipeTransform } from "@angular/core";
import { IProducts } from "app/interfaces/product";

@Pipe({
  name: "filterProducts",
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProducts[], search: string): IProducts[] {
    return products.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
