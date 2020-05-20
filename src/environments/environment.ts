export const environment = {
  production: false,
  // Identity Provider
  identityProvider: 'https://accounts.spotify.com/authorize',
  clientId: '2a6ab7a7882b487687d3de8450036199',
  scope: 'user-read-private%20user-read-email',
  showDialog: 'true',
  callback: 'http://localhost:4200/login',
  // APIs
  baseUrl: 'https://api.spotify.com/v1',
  getCurrentUser: '/me',
  search: '/search',
  searchType: 'album',
  albums: '/albums',
  // Local Storage Keys
  userToken: 'userToken',
  albumHistory: 'albumHistory'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
