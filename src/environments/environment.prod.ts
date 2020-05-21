export const environment = {
  production: true,
  // Identity Provider
  identityProvider: 'https://accounts.spotify.com/authorize',
  clientId: '2a6ab7a7882b487687d3de8450036199',
  scope: 'user-read-private%20user-read-email',
  showDialog: 'true',
  callback: 'https://ng-spotify-project.web.app/login',
  profilePlaceholder: 'https://www.lococrossfit.com/wp-content/uploads/2019/02/user-icon-300x300.png',
  // APIs
  baseUrl: 'https://api.spotify.com/v1',
  searchOffset: 20,
  getCurrentUser: '/me',
  search: '/search',
  searchType: 'album',
  albums: '/albums',
  albumCoverPlaceholder: 'https://www.streamplay.media/themes/streamplay/assets/images/artwork.cover.jpg',
  // Local Storage Keys
  userToken: 'userToken',
  albumHistory: 'albumHistory'
};
