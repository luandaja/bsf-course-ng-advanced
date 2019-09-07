import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  images: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg",
    "http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg",
    "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"
  ];
  constructor() { }

  ngOnInit() {
  }

}
