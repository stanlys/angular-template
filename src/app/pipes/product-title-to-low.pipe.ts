import { Pipe, PipeTransform } from "@angular/core";
import { IProducts } from "app/interfaces/product";

@Pipe({
  name: "productTitleToLow",
})
export class ProductTitleToLowPipe implements PipeTransform {
  transform(product: IProducts): IProducts {
    return { ...product, title: product.title.toLocaleLowerCase() };
  }
}
