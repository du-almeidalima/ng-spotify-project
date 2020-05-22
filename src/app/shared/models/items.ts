import { ItemType } from './enums/item-type';

export interface Artist {
  name: string;
  id: string;
  type: ItemType.artist;
}

export interface Album {
  name: string;
  id: string;
  type: ItemType.album;
  images: string[];
  artists: Artist[];
  tracks?: Track[];
}

export interface Track {
  name: string;
  id: string;
  type: ItemType.track;
  duration: string;
  previewUrl: string;
}

export type Item = Artist | Album | Track;
