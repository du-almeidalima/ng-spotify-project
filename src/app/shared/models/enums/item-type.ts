/**
 * @description Types of items returned by the Spotify API.
 * @see [Search Results]{@link https://developer.spotify.com/documentation/web-api/reference/search/search/#query-parameters}
 */
export enum ItemType {
  album = 'album',
  artist = 'artist',
  playlist = 'playlist',
  track = 'track',
  show = 'show',
  episode = 'episode'
}
