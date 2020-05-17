import {Album} from "./items";

/**
 * @description This is the container for the search response, if there's a need to include more than one type (Tracks,
 * Artists, Shows...) it can be done here.
 *
 * @see Album
 */

export interface SearchResult {
  albums: Album[]
}
