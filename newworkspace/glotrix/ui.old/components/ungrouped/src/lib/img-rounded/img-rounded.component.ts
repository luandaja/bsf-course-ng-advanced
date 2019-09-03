import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'glotrix-img-rounded',
  templateUrl: './img-rounded.component.html',
  styleUrls: ['./img-rounded.component.scss']
})
export class ImgRoundedComponent implements OnInit {

  @Input() source = "https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg";
  @Input() width = 30;
  @Input() height = 30;


  constructor() { }

  ngOnInit() {
  }

}
