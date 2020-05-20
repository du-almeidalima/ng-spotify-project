export const environment = {
  production: true,
  // Identity Provider
  identityProvider: 'https://accounts.spotify.com/authorize',
  clientId: '2a6ab7a7882b487687d3de8450036199',
  scope: 'user-read-private%20user-read-email',
  showDialog: 'true',
  callback: 'https://ng-spotify-project.web.app/login',
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
