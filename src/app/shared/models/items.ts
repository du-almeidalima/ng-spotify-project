import { ItemType } from "./enums/item-type";

export interface Artist {
  type: ItemType.artist;
  name: string;
  id: string;
}

export interface Album {
  name: string;
  id: string;
  type: ItemType.album;
  artists: Artist[];
  images: string[];
}

export type Item = Artist | Album;
