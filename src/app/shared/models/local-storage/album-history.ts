import {User} from "../user";
import {Album} from "../items";

export interface AlbumHistory {
  user: User,
  albums: Album[]
}
