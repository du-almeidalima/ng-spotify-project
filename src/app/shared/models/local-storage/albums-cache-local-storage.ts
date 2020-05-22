import {AlbumHistory} from './album-history';
import {Album} from '../items';

export interface AlbumsCacheLocalStorage {
  albumHistory: AlbumHistory[];
  albums: Album[];
}
