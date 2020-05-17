import {Component, Input} from '@angular/core';
import {Album} from "../../../../../shared/models/album";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {

  @Input() public item: Album;

  constructor() { }

  public onAlbumClick(): void {
    console.log(this.item)
  }
}
