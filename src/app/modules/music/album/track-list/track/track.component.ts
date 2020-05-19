import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Track} from "../../../../../shared/models/items";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {

  @Input()
  public track: Track;
  @Input()
  public index: number;

  @Output()
  public playTrack: EventEmitter<string> = new EventEmitter<string>();

  get duration()  {
    const time = new Date(this.track.duration);
    return `${time.getMinutes()}: ${time.getSeconds() < 10 ? '0' : ''}${time.getSeconds()}`;
  }

  constructor() { }
}
