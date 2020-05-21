import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Location} from "@angular/common";
import {Subscription} from "rxjs";
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
  private lastSearch =  null;

  get artistsNames(): string {
    return this.album.artists.map(a => a.name).join(', ');
  }

  constructor(private store: Store<fromApp.AppState>,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('music')
      .subscribe(musicState => {
        if (musicState.currentItem.type === ItemType.album) {
          this.album = musicState.currentItem;
        }

        this.lastSearch = musicState.lastSearch;
      })

    window.scrollTo(0, 0);
  }

  public navigateBack(): void {
    console.log(this.lastSearch)
    if (this.lastSearch !== null) {
      this.location.back();
    } else {
      this.router.navigate(['../../'], { relativeTo: this.route})
    }
  }
}
