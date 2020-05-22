/**
 * @description Selected fields from API response for a full album object
 * @see [Spotify Albums API]{@link https://developer.spotify.com/documentation/web-api/reference/albums/get-album/}
 */
export interface AlbumSearchResponse {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  artists: [
    {
      name: string;
      type: string;
      id: string;
    }
  ];
  tracks: {
    items: [
      {
        name: string;
        id: string;
        duration_ms: number;
        preview_url: string;
      }
    ]
  };
}
