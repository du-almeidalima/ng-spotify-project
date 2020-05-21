import {ItemType} from "./enums/item-type";

export interface SearchResultItem {
  id: string;
  type: ItemType
  img: string;
  title: string;
  subTitle: string;
}
