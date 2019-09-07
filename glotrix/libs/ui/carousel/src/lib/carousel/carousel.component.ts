import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'gt-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = [];
  imagePrefix = 'img-';
  startIndex = 0;
  endIndex: number;

  constructor() { }

  ngOnInit() {
    this.endIndex = this.images.length - 1;
  }
  getImageId(id: number): string {
    return this.imagePrefix + id;
  }
  getNextImageId(currentIndex: number): string {
    const id = (currentIndex === this.endIndex) ? this.startIndex : currentIndex + 1;
    return this.getImageId(id);
  }
  getPreviousImageId(currentIndex: number): string {
    const id = (currentIndex === this.startIndex) ? this.endIndex : currentIndex - 1;
    return this.getImageId(id);
  }
}
