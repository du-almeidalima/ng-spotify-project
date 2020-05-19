import {Component, Input} from '@angular/core';
import {Track} from "../../../../shared/models/items";

@Component({
  selector: 'app-track-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent {

  @Input()
  public tracks: Track[];

  constructor() { }

  public handlePlayTrack(url: string) {
    console.log(url)
  }
}
