import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {ItemType} from '../../../shared/models/enums/item-type';
import {Album} from '../../../shared/models/items';
import {environment as env} from '../../../../environments/environment';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {

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
      });

    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  public navigateBack(): void {
    if (this.lastSearch !== null) {
      this.location.back();
    } else {
      this.router.navigate(['../../'], { relativeTo: this.route});
    }
  }
}
