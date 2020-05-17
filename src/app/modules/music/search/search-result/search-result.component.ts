import {Component} from '@angular/core';
import {SearchResult} from "../../../../shared/models/search-result";
import {ItemType} from "../../../../shared/models/enums/item-type";
import {SearchResultItem} from "../../../../shared/models/search-result-item";
import {ItemMapper} from "../../../../shared/utils/item-mapper";
import {Item} from "../../../../shared/models/items";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  public results: SearchResult = {
    albums: [
      { id: 'dasasdsa',          type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 1', images: ['https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-768x768.jpg']},
      { id: 'faafsdf',           type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 2', images: ['https://static.billboard.com/files/media/David-Bowie-Aladdin-Sane-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'sdaasdv',           type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 3', images: ['https://static.billboard.com/files/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'dasasdbdfasdfsa',   type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 4', images: ['https://static.billboard.com/files/media/The-Beatles-Sgt-Peppers-lonely-hearts-club-band-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'dasasasdasddsa',    type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 5', images: ['https://static.billboard.com/files/media/Nirvana-Nevermind-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'fdasfaf',           type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 6', images: ['https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'asdfasd',           type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 7', images: ['https://static.billboard.com/files/media/Patti-Smith-Horses-album-covers-billboard-1000x1000-compressed.jpg']},
      { id: 'b adsf',            type: ItemType.album, artists:[{id: '123', name: 'Artist Name', type: ItemType.artist}],name: 'Test 7', images: ['https://static.billboard.com/files/media/The-Beatles-Abbey-Road-album-covers-billboard-1000x1000-compressed.jpg']}
    ]
  };

  constructor() { }

  getResultItem(item: Item): SearchResultItem {
    return ItemMapper.mapToSearchResultItem(item)
  }

}
