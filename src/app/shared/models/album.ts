import {Artist} from "./artist";

export interface Album {
  name: string;
  id: string;
  artists: Artist[];
  images: string[];
}
