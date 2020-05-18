// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Identity Provider
  identityProvider: 'https://accounts.spotify.com/authorize',
  clientId: '2a6ab7a7882b487687d3de8450036199',
  scope: 'user-read-private%20user-read-email',
  callback: 'http://localhost:4200/login',
  // APIs
  baseUrl: 'https://api.spotify.com/v1',
  getCurrentUser: '/me',
  search: '/search',
  searchType: 'album',
  albums: '/albums'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
