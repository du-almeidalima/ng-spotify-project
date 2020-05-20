import {Album} from "../items";

export interface AlbumHistory {
  userId: string,
  albums: Album[]
}
