import {Component, Input} from '@angular/core';
import {SearchResultItem} from "../../../../../shared/models/search-result-item";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {

  @Input() public item: SearchResultItem;

  constructor(private router: Router, private route: ActivatedRoute) { }

  public onAlbumClick(): void {
    this.router.navigate(['../../album', this.item.id], { relativeTo: this.route })
  }
}
