import {Component, OnInit} from '@angular/core';
import {Album} from "../../../../shared/models/album";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public results: Album[] = [
    { id: 'dasasdsa',          artists:[{id: '123', name: 'Artist Name'}],name: 'Test 1', images: ['https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-768x768.jpg']},
    { id: 'faafsdf',           artists:[{id: '123', name: 'Artist Name'}],name: 'Test 2', images: ['https://static.billboard.com/files/media/David-Bowie-Aladdin-Sane-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'sdaasdv',           artists:[{id: '123', name: 'Artist Name'}],name: 'Test 3', images: ['https://static.billboard.com/files/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'dasasdbdfasdfsa',   artists:[{id: '123', name: 'Artist Name'}],name: 'Test 4', images: ['https://static.billboard.com/files/media/The-Beatles-Sgt-Peppers-lonely-hearts-club-band-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'dasasasdasddsa',    artists:[{id: '123', name: 'Artist Name'}],name: 'Test 5', images: ['https://static.billboard.com/files/media/Nirvana-Nevermind-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'fdasfaf',           artists:[{id: '123', name: 'Artist Name'}],name: 'Test 6', images: ['https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'asdfasd',           artists:[{id: '123', name: 'Artist Name'}],name: 'Test 7', images: ['https://static.billboard.com/files/media/Patti-Smith-Horses-album-covers-billboard-1000x1000-compressed.jpg']},
    { id: 'b adsf',            artists:[{id: '123', name: 'Artist Name'}],name: 'Test 7', images: ['https://static.billboard.com/files/media/The-Beatles-Abbey-Road-album-covers-billboard-1000x1000-compressed.jpg']}
  ];

  constructor() { }

  ngOnInit(): void { }

}
