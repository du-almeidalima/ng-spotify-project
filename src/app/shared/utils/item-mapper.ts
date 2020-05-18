import {SearchResultItem} from "../models/search-result-item";
import {ItemType} from "../models/enums/item-type";
import {Album, Artist, Item, Track} from "../models/items";
import {SearchResponse} from "../models/api/search-response";
import {SearchResult} from "../models/search-result";
import {AlbumSearchResponse} from "../models/api/album-search-response";

export class ItemMapper {
  static mapToSearchResultItem(item: Item): SearchResultItem {
    switch (item.type) {
      case ItemType.album:
        const subTitle = item.artists.map(a => a.name).join();
        return { id: item.id, img: item.images[0], title: item.name, subTitle }
    }
  }

  static mapToSearchResult(searchResponse: SearchResponse): SearchResult {
    const albums: Album[] = searchResponse.albums.items
      .map(resAlbum => {
        // Mapping Artist
        const artists: Artist[] = ItemMapper.mapToArtist(resAlbum.artists)
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

  static mapToAlbumItem(searchResponse: AlbumSearchResponse): Album {
    return {
      name: searchResponse.name,
      id: searchResponse.id,
      type: ItemType.album,
      artists: ItemMapper.mapToArtist(searchResponse.artists),
      images: searchResponse.images.map(img => img.url),
      tracks: ItemMapper.mapToTracks(searchResponse.tracks.items)
    }
  }

  // Helpers
  private static mapToArtist(artistArr: any[]): Artist[] {
    return artistArr.map(artist => {
      return {
        name: artist.name,
        id: artist.id,
        type: ItemType.artist
      }
    })
  }

  private static mapToTracks(tracksArr: any[]): Track[] {
    return tracksArr.map(track => {
      return {
        name: track.name,
        id: track.id,
        duration: track.duration_ms,
        type: ItemType.track,
        previewUrl: track.preview_url
      }
    })
  }
}
