import { Pipe, PipeTransform } from '@angular/core';
import { ItemDef } from '../model/item';
import { ShopItemDef } from '../pages/shop-page/shop-page.component';

@Pipe({
  name: 'filterItemsByTipe'
})
export class FilterItemsByTipePipe implements PipeTransform {

  transform(items: ShopItemDef[], type: string): ShopItemDef[] {
    return type === 'all' ? items : items.filter( item => item.type === type );
  }

}
