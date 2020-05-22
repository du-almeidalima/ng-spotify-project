import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Track} from '../../../../shared/models/items';

@Component({
  selector: 'app-track-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent implements OnInit, OnDestroy{
  public trackCurrentIndex: number;
  public trackCurrentTime = 0;
  public trackIsPlaying = false;
  public audioPlayer = new Audio();

  private readonly AUDIO_VOLUME = 0.2;

  @Input()
  public tracks: Track[];

  constructor() { }

  ngOnInit(): void {
    this.audioPlayer.volume = this.AUDIO_VOLUME;
    this.audioPlayer.addEventListener('ended', this.endAudio.bind(this));
  }

  ngOnDestroy(): void {
    this.audioPlayer.pause();
    this.audioPlayer.removeAttribute('src');
    this.audioPlayer.load();
  }

  public handlePlayTrack(index: number) {
      this.trackCurrentIndex = index;
      this.toggleAudio();
  }

  /**
   * Fired whenever a Track is clicked, it'll check if this is this Track was playing before and what time it was.
   */
  private toggleAudio(): void {
    // Pause
    if (this.audioPlayer.src === this.tracks[this.trackCurrentIndex].previewUrl && this.trackIsPlaying) {
      this.trackCurrentTime = this.audioPlayer.currentTime;
      this.trackIsPlaying = false;
      this.audioPlayer.pause();
    }
    // Play or Continue
    else {
      if (this.audioPlayer.src === this.tracks[this.trackCurrentIndex].previewUrl) {
        this.audioPlayer.currentTime = this.trackCurrentTime;
      } else {
        this.trackCurrentTime = 0;
        this.audioPlayer.src = this.tracks[this.trackCurrentIndex].previewUrl;
      }

      this.trackIsPlaying = true;
      this.audioPlayer.play();
    }
  }

  private endAudio(): void {
    this.trackCurrentIndex = -1;
    this.trackCurrentTime = 0;
    this.trackIsPlaying = false;
  }
}
