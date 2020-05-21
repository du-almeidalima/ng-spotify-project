import {TestBed} from '@angular/core/testing';

import {AlbumsCacheLocalStorage} from "../../../shared/models/local-storage/albums-cache-local-storage";
import {provideMockStore} from "@ngrx/store/testing";
import {AlbumService} from './album.service';
import {ItemType} from "../../../shared/models/enums/item-type";
import {Album} from "../../../shared/models/items";
import {AppState} from "../../../store/app.reducer";
import {AlbumHistory} from "../../../shared/models/local-storage/album-history";

describe('AlbumService', () => {
  // Test Variables
  let service: AlbumService;
  const initialState: AppState = {
    music: null,
    auth: null
  }
  const albums: Album[] = [
    {
      id: 'AB1',
      name: 'Fake Album 1',
      images: ['https://i.pinimg.com/originals/b3/51/e7/b351e7c21017e908d42a169e031510df.jpg'],
      type: ItemType.album,
      tracks: [null],
      artists: [{ id: 'AR1', name: 'Fake Artist 1', type: ItemType.artist}],
    },
    {
      id: 'AB2',
      name: 'Fake Album 2',
      images: ['https://i.pinimg.com/originals/b3/51/e7/b351e7c21017e908d42a169e031510df.jpg'],
      type: ItemType.album,
      tracks: [null],
      artists: [{ id: 'AR2', name: 'Fake Artist 2', type: ItemType.artist}],
    },
    {
      id: 'AB2',
      name: 'Fake Album 3',
      images: ['https://i.pinimg.com/originals/b3/51/e7/b351e7c21017e908d42a169e031510df.jpg'],
      type: ItemType.album,
      tracks: [null],
      artists: [{ id: 'AR3', name: 'Fake Artist 3', type: ItemType.artist}],
    },
  ]
  const mockAlbumHistory: AlbumsCacheLocalStorage = {
    albumHistory: [
      { userId: 'testUser1', albums: albums },
      { userId: 'testUser2', albums: []},
      { userId: 'testUser3', albums: [
          {
            id: 'AB4',
            name: 'User 3 Fake Album',
            images: ['https://i.pinimg.com/originals/b3/51/e7/b351e7c21017e908d42a169e031510df.jpg'],
            type: ItemType.album,
            tracks: [null],
            artists: [{ id: 'AR3', name: 'Fake Artist 2', type: ItemType.artist}],}
        ]
      }
    ],
    albums: albums
  }

  // Tests
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore<AppState>({initialState})
      ]
    });
    jasmine.getEnv().allowRespy(true);
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockAlbumHistory));
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the Album by Id', () => {
    const mockAlbum: Album = mockAlbumHistory.albums[0]
    const album: Album = service.getAlbumFromCache('AB1');

    expect(album).toBeTruthy();
    expect(album).toEqual(mockAlbum);
  });

  it('should get a User AlbumHistory by User id', () => {
    const mockUser1Albums: Album[] = mockAlbumHistory.albumHistory[0].albums;
    const mockUser3Albums: Album[] = mockAlbumHistory.albumHistory[2].albums;

    const user1Albums: Album[]  = service.getUserAlbumHistory('testUser1').albums;
    const user3Albums: Album[]  = service.getUserAlbumHistory('testUser3').albums;

    expect(user1Albums).toEqual(mockUser1Albums);
    expect(user3Albums).toEqual(mockUser3Albums);
  });

  it('should return a AlbumHistory object with user property if the user don\'t have a AlbumHistory yet',
    () => {
    const mockUser4AlbumHistory: AlbumHistory = { userId: 'testUser4', albums: [] }

    const user4AlbumsHistory: AlbumHistory  = service.getUserAlbumHistory('testUser4');

    expect(mockUser4AlbumHistory).toEqual(user4AlbumsHistory);
  });

  it(`should return falsy if there's no Album with the provided Id or if the LocalStorage don't have any entry`,
    () => {
      let emptyAlbum: Album;

      emptyAlbum = service.getAlbumFromCache('THE_FORBIDDEN_ELVIS_ALBUM');
      expect(emptyAlbum).toBeFalsy();

      spyOn(localStorage, 'getItem').and.returnValue(null);
      emptyAlbum = service.getAlbumFromCache('THE_FORBIDDEN_ELVIS_ALBUM');
      expect(emptyAlbum).toBeFalsy();
    })
});
