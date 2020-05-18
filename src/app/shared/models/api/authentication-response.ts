/**
 * @description Selected fields from the Spotify SSO Implicit Grant Flow response
 * @see [Spotify Authorization SSO API]{@link https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow}
 */
export interface AuthenticationResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  state?: string;
}
