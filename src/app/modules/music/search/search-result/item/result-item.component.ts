import {Component, Input} from '@angular/core';
import {SearchResultItem} from "../../../../../shared/models/search-result-item";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {

  @Input() public item: SearchResultItem;

  constructor() { }

  public onAlbumClick(): void {
    console.log(this.item)
  }
}
