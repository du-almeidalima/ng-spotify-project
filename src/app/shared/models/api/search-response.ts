/**
 * @description Selected fields from API response for a search of type 'album' defined in environment variables.
 * @see [Spotify Search API]{@link https://developer.spotify.com/documentation/web-api/reference/search/search/#fields-reference}
 */
export interface SearchResponse {
  albums: {
    href: string;
    items: [
      {
        name: string;
        id: string;
        type: string;
        artists: [
          {
            name: string;
            type: string;
            id: string;
          }
        ];
        images: [
          {
            url: string;
          }
        ]
      }
    ]
  }
}
