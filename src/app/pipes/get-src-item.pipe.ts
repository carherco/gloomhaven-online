import { Pipe, PipeTransform } from '@angular/core';
import { ITEMS } from '../data/items';

@Pipe({
  name: 'getSrcItem'
})
export class GetSrcItemPipe implements PipeTransform {

  transform(item: number): string {
    return 'assets/images/' + ITEMS[item - 1].image;
  }

}
