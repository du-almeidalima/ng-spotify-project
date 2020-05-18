import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {Album} from "../../../shared/models/items";
import * as fromApp from '../../../store/app.reducer';
import {map} from "rxjs/operators";
import {ItemType} from "../../../shared/models/enums/item-type";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public album: Album;
  private storeSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

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
  }

}
