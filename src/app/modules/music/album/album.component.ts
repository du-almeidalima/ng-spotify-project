import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {ItemType} from "../../../shared/models/enums/item-type";
import {Album} from "../../../shared/models/items";
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public album: Album;
  private storeSub: Subscription;

  get artistsNames(): string {
    return this.album.artists.map(a => a.name).join();
  }

  constructor(private store: Store<fromApp.AppState>, private location: Location) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('music')
      .pipe(
        map(musicState => musicState.currentItem)
      )
      .subscribe(item => {
        if (item.type === ItemType.album) {
          this.album = item
        }
      })

    window.scrollTo(0, 0);
  }

  public navigateBack(): void {
    this.location.back();
  }
}
