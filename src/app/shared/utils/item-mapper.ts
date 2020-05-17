import {SearchResultItem} from "../models/search-result-item";
import {ItemType} from "../models/enums/item-type";
import {Album, Artist, Item} from "../models/items";
import {SearchResponse} from "../models/api/search-response";
import {SearchResult} from "../models/search-result";

export class ItemMapper {
  static mapToSearchResultItem(item: Item): SearchResultItem {
    switch (item.type) {
      case ItemType.album:
        const subTitle = item.artists.map(a => a.name).join();
        return { img: item.images[0], title: item.name, subTitle }
    }
  }

  static mapToSearchResult(searchResponse: SearchResponse): SearchResult {
    const albums: Album[] = searchResponse.albums.items
      .map(resAlbum => {
        // Mapping Artist
        const artists: Artist[] = resAlbum.artists.map(resArtist => {
          return {
            name: resArtist.name,
            id: resArtist.id,
            type: ItemType.artist
          }
        })
        // Mapping Images
        const images: string[] = resAlbum.images.map(img => img.url)
        // Mapping Album
        const album: Album = {
          name: resAlbum.name,
          id: resAlbum.id,
          artists,
          images,
          type: ItemType.album
        }

        return album
      })

    // Mapping SearchResult
    return {
      albums
    };
  }
}
