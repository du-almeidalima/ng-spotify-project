/**
 * @description Selected fields from API response for a a search of the currently logged user data '/v1/me'.
 * @see [Spotify Users Profile API]{@link https://developer.spotify.com/documentation/web-api/reference/users-profile/}
 */
export interface UserDataResponse {
  display_name: string;
  id: string;
  email: string;
  images: [
    {
      url: string
    }
  ];
}
