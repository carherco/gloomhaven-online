import { Pipe, PipeTransform } from '@angular/core';
import { ItemDef } from '../model/item';

@Pipe({
  name: 'filterItemsByTipe'
})
export class FilterItemsByTipePipe implements PipeTransform {

  transform(items: ItemDef[], type: string): ItemDef[] {
    return type === 'all' ? items : items.filter( item => item.type === type );
  }

}
