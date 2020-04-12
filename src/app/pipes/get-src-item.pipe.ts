import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../data/items';

@Pipe({
  name: 'getSrcItem'
})
export class GetSrcItemPipe implements PipeTransform {

  transform(item: number): string {
    return 'assets/images/' + items[item - 1].image;
  }

}
