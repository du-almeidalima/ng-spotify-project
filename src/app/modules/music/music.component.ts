import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})
export class MusicComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
