import {SearchResultItem} from "../models/search-result-item";
import {ItemType} from "../models/enums/item-type";
import {Item} from "../models/items";

export class ItemMapper {
  static mapToSearchResultItem(item: Item): SearchResultItem {
    switch (item.type) {
      case ItemType.album:
        const subTitle = item.artists.map(a => a.name).join();
        return { img: item.images[0], title: item.name, subTitle }
    }
  }
}
